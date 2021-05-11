import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { ChaptersApi } from '../apis/chapters.api';
import { ChapterDetailStore } from '../states/chapter-detail';
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
      map((res) => {
        if (
          res['data'] &&
          res['data']['allChapters'] &&
          res['data']['allChapters']['nodes'].length
        ) {
          const chapters = res['data']['allChapters']['nodes'];
          return this.transformDataChapters(chapters);
        }
        return [];
      }),
      tap((res) => {
        if (res.length) {
          this.chaptersStore.set([]);
          this.chaptersStore.set(res);
        } else {
          this.chaptersStore.set([]);
        }
      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

  getChapterDetail(bookId: string, chapterId: string) {
    return this.chaptersApi.getChapterDetail(bookId, chapterId).pipe(
      map((res) => {
        if (
          res['data'] &&
          res['data']['allChapters'] &&
          res['data']['allChapters']['nodes'].length
        ) {
          const chapter = res['data']['allChapters']['nodes'];
          return chapter.map((item) => {
            const content = item['contentByChapterId']?.content;
            return { ...item, content };
          });
        }
        return [];
      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

  private transformDataChapters(chapters) {
    let chapterLength = chapters.length;
    return chapters.map((item, index) => {
      // them so chuong cho moi chhapter
      chapterLength = chapterLength - 1;
      return { ...item, chapterNumber: chapterLength + 1 };
    });
  }
}
