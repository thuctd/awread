SELECT 'DROP MATERIALIZED VIEW ' || string_agg(oid::regclass::text, ', ')
FROM pg_class
WHERE relkind = 'm';

DROP MATERIALIZED VIEW mv_most_view_books, mv_books_latest_chapters, mv_settings CASCADE;
drop v_creations cascade;

ALTER TABLE books
ALTER COLUMN type DROP DEFAULT,
ALTER COLUMN type TYPE numeric USING type::numeric,
ALTER COLUMN type SET DEFAULT 0;

update books
set "userId" = '7cc248bc-8d3a-4f23-b8ab-6ae93c3848b0'
where "bookId" = '0001d07c-dfc1-4d29-9df6-5fa251c67e26';

select upsert_authors('0001d07c-dfc1-4d29-9df6-5fa251c67e26', array['149acfc4-f63c-48bf-b64a-cb6cd0bf09db', '6eb6bf23-fde4-4d56-9fdd-5e099c3ff8c3']::uuid[]);

select
count(_) filter (where published = true) as publishedCount,
count(_) filter (where published = false) as draftCount
from chapters where "bookId" = '0001d07c-dfc1-4d29-9df6-5fa251c67e26';

select
b._,
count(_) filter (where c.published = true)::numeric as publishedCount,
count(\*) filter (where c.published = false)::numeric as draftCount,
sum(v.count)::numeric as viewCount
from books b
inner join chapters c using ("bookId")
inner join book_visits v using ("bookId")
group by 1
limit 10;

insert into contents ("chapterId", content)
select "chapterId", 'Awread chào quý vị tác giả và độc giả yêu mến, chào mừng bạn đến với nền tảng của chúng tôi, hi vọng bạn sẽ có trải nghiệm vui vẻ'
from (select \* from chapters c
where c."chapterId" not in (select ct."chapterId" from contents ct)) aliastable;

SELECT 'DROP MATERIALIZED VIEW ' || string_agg(oid::regclass::text, ', ')
FROM pg_class
WHERE relkind = 'm';

DROP MATERIALIZED VIEW mv_most_view_books, mv_books_latest_chapters, mv_settings CASCADE;
drop v_creations cascade;

ALTER TABLE books ALTER COLUMN cover TYPE boolean using cover::boolean;

ALTER TABLE books
ALTER COLUMN type DROP DEFAULT,
ALTER COLUMN type TYPE numeric USING type::numeric,
ALTER COLUMN type SET DEFAULT 0;
update books
set type = 0
where type = 'composed';

update books
set type= 1
where type = 'collected';

select count(\*) from books;
