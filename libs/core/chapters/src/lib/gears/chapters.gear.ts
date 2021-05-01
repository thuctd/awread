import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ChaptersApi } from '../apis/chapters.api';
import { ChapterDetailStore } from '../states/chapter-detail';
import { ChaptersStore } from '../states/chapters';

@Injectable({ providedIn: 'root' })
export class ChaptersGear {

  constructor(
    private chaptersApi: ChaptersApi,
    private chaptersStore: ChaptersStore,
    private chapterDetailStore: ChapterDetailStore
  ) {
  }

  getAllChapters(bookId: string) {
    return this.chaptersApi.getAllChapters(bookId).pipe(
      tap((res) => {
        console.log('Chapters: ', res);
        // this.chaptersStore.set(res);
      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

  getChapterDetail(bookId: string, chapterId: string) {
    return this.chaptersApi.getChapterDetail(bookId, chapterId).pipe(
      tap((res) => {
        console.log('Chapter detail', res);
        // this.chapterDetailStore.set(chapter);
      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }
}
