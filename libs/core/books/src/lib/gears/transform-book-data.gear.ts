import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TransformBookDataGear {
  constructor() { }
  tranformBookData(book) {
    const categoryId = book['categoryByCategoryId'].categoryId ?? '';
    const categoryName = book['categoryByCategoryId'].name ?? '';
    const genreIds = book['booksGenresByBookId']['nodes'].map(
      (item) => item.genreId
    );
    return {
      ...book,
      genreIds,
      categoryId,
      categoryName,
      totalChapterCount: book['chaptersByBookId']?.totalCount ?? 0,
    };
  }

  tranformBookHomeData(book) {
    const newestChapters = JSON.parse(book['newestChapters'].split('/'));
    return {
      ...book,
      newestChapters
    };
  }

}
