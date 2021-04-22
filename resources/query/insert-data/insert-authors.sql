copy authors("bookId", "userId")
FROM 'G:\small-cosmos\mock-data\authors\authors.csv' 
DELIMITER ',' 
CSV HEADER;


CREATE TEMP TABLE tmp_table AS
SELECT * 
FROM authors
WITH NO DATA;

COPY tmp_table("bookId", "userId") FROM 'G:\small-cosmos\mock-data\authors\authors 3.csv'
DELIMITER ',' 
CSV HEADER;

INSERT INTO authors
SELECT DISTINCT "bookId", "userId"
FROM tmp_table
ON CONFLICT ("bookId", "userId") DO NOTHING;

drop table tmp_table;