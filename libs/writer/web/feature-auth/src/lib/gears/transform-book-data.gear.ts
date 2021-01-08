import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TransformBookDataGear {
  constructor() {}
  tranformBookData(book) {
    const totalCountPublished =
      book.chaptersByBookid['nodes'].filter(
        (item) => item.status === 'PUBLISHED'
      ).length ?? 0;
    const chapters = book.chaptersByBookid['nodes'].map((item, index) => ({
      ...item,
      chapterNumber: index + 1,
    }));
    return {
      ...book,
      chaptersByBookid: {
        data: chapters ?? [],
        totalCount: book.chaptersByBookid.totalCount,
        totalCountPublished,
      },
    };
  }
}
