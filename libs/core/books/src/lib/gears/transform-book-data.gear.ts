import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TransformBookDataGear {
  constructor() { }
  tranformBookData(book) {
    const categoryId = book['categoryByCategoryId'].categoryId ?? '';
    const categoryname = book['categoryByCategoryId'].name ?? '';
    const genreIds = book['booksGenresByBookId']['nodes'].map(
      (item) => item.genreId
    );
    return {
      ...book,
      genreIds,
      categoryId,
      categoryname,
      totalChapterCount: book['chaptersByBookId']?.totalCount ?? 0,
    };
  }

}
