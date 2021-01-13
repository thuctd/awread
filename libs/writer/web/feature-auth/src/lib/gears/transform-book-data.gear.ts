import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TransformBookDataGear {
  constructor() {}
  tranformBookData(book) {
    const chapters = book['chaptersByBookid']['nodes'];
    const totalCountPublished =
      chapters?.filter((item) => item.status === 'PUBLISHED')?.length ?? 0;
    return {
      ...book,
      categoryname: book['categoryByCategoryid']?.name ?? '',
      totalChapterCount: book['chaptersByBookid']?.totalCount ?? 0,
      totalChapterCountPublished: totalCountPublished ?? 0,
    };
  }
}
