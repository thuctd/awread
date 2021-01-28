import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TransformBookDataGear {
  constructor() {}
  tranformBookData(book) {
    const categoryid = book['categoryByCategoryid'].categoryid ?? '';
    const categoryname = book['categoryByCategoryid'].name ?? '';
    const genreIds = book['bookGenresByBookid']['nodes'].map(
      (item) => item.genreid
    );
    const chapters = book['chaptersByBookid']['nodes'] ?? [];
    const totalCountPublished =
      chapters?.filter((item) => item.status === 'PUBLISHED')?.length ?? 0;
    return {
      ...book,
      genreIds,
      categoryid,
      categoryname,
      totalChapterCount: book['chaptersByBookid']?.totalCount ?? 0,
      totalChapterCountPublished: totalCountPublished ?? 0,
    };
  }
}
