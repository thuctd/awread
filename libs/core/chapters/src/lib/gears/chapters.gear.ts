import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { ChaptersApi } from '../apis/chapters.api';
import { ChaptersStore } from '../states/chapters';

@Injectable({ providedIn: 'root' })
export class ChaptersGear {

  constructor(
    private chaptersApi: ChaptersApi,
    private chaptersStore: ChaptersStore
  ) {
  }

  getAllChapters(bookId: string) {
    return this.chaptersApi.getAllChapters(bookId).pipe(
      map((chapters) => { return this.transformDataChapters(chapters) }),
      tap(chapters => { this.chaptersStore.set(chapters) }),
    );
  }

  getChapterDetail(bookId: string, chapterId: string) {
    return this.chaptersApi.getChapterDetail(bookId, chapterId).pipe(
      map((result) => result.map(chapter => {
        const content = chapter['contentByChapterId']?.content;
        const book = chapter['bookByBookId'];
        return { ...chapter, content, book };
      })),
    );
  }

  private transformDataChapters(chapters) {
    let chapterLength = chapters.length;
    return chapters.map((item, index) => {
      chapterLength = chapterLength - 1;
      return { ...item, chapterNumber: chapterLength + 1 };
    });
  }
}
