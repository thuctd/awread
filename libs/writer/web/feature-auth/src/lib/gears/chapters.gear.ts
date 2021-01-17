import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { FirebaseFirestoreAddon } from '../addons';
import { tap, catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { BooksStore } from '../states/books';
import { Chapter } from '../..';
import { ChaptersApi } from '../apis';
import { ChaptersQuery, ChaptersStore } from '../states/chapters';
import { SnackbarsService } from '@awread/global/packages';

@Injectable({ providedIn: 'root' })
export class ChaptersGear {
  constructor(
    private chaptersApi: ChaptersApi,
    private firebaseFirestoreAddon: FirebaseFirestoreAddon,
    private chaptersStore: ChaptersStore,
    private booksStore: BooksStore,
    private router: Router,
    private snackbarsService: SnackbarsService,
    private chapterQuery: ChaptersQuery
  ) {}

  getAllChapters(bookid: string) {
    return this.chaptersApi.getAllChapters(bookid).pipe(
      tap((res) => {
        if (
          res['data'] &&
          res['data']['allChapters'] &&
          res['data']['allChapters']['nodes'].length
        ) {
          this.chaptersStore.set(res['data']['allChapters']['nodes']);
        } else {
          this.chaptersStore.set([]);
        }
      }),
      catchError((err) => throwError(err))
    );
  }

  getChapterDetail(chapterid: string, bookid: string) {
    return this.chaptersApi.getChapterDetail(chapterid, bookid).pipe(
      map((res) => {
        if (
          res['data'] &&
          res['data']['allChapters'] &&
          res['data']['allChapters']['nodes'].length
        ) {
          const chapter = res['data']['allChapters']['nodes'];
          console.log('chapter: ', chapter);
          // this.chaptersStore.updateChapterById(chapterid, chapter[0]);
          return chapter;
        }
        return [];
      }),
      catchError((err) => throwError(err))
    );
  }

  createChapter(chapter: Chapter) {
    const chapterid = this.firebaseFirestoreAddon.createId();
    const chapterDetail = { ...chapter, chapterid };
    return this.chaptersApi.createChapter(chapterDetail).pipe(
      tap((res) => {
        console.log('createChapter res: ', res);
        this.snackbarsService.create('Thêm chương thành công!');
        if (res['data'] && res['data']['createChapter']['chapter']) {
          const isPublished = chapter.status === 'PUBLISHED';
          this.chaptersStore.add(chapterDetail, { prepend: true });
          this.booksStore.updateTotalChapterCount(chapter.bookid, isPublished);
        }
        this.router.navigate(['detail', { bookId: chapterDetail.bookid }]);
      }),
      catchError((err) => {
        this.snackbarsService.error('Đã xảy ra lỗi. Vui lòng thử lại!');
        return throwError(err);
      })
    );
  }

  updateChapter(chapter) {
    return this.chaptersApi.updateChapter(chapter).pipe(
      tap((res) => {
        this.snackbarsService.create('Cập nhật chương thành công!');
        if (res['data']) {
          const chapterEntity = this.chapterQuery.getEntity(chapter.chapterid);
          if (chapterEntity.status !== chapter.status) {
            if (chapter.status === 'PUBLISHED') {
              this.booksStore.updateTotalChapterPublished(chapter.bookid, 1);
            } else {
              this.booksStore.updateTotalChapterPublished(chapter.bookid, -1);
            }
          }
          this.chaptersStore.updateChapterById(chapter.chapterid, chapter);
        }
        this.router.navigate(['detail', { bookId: chapter.bookid }]);
      }),
      catchError((err) => {
        this.snackbarsService.error('Đã xảy ra lỗi. Vui lòng thử lại!');
        return throwError(err);
      })
    );
  }

  removeChapter(chapterid: string, bookId: string, status: string) {
    return this.chaptersApi.removeChapter(chapterid).pipe(
      tap((res) => {
        this.snackbarsService.create('Xóa chương thành công!');
        if (res['data']) {
          const isRemoveChapterPublished = status === 'PUBLISHED';
          this.chaptersStore.remove(chapterid);
          this.booksStore.updateTotalChapterCount(
            bookId,
            isRemoveChapterPublished,
            -1
          );
        }
      }),
      catchError((err) => {
        this.snackbarsService.error('Đã xảy ra lỗi. Vui lòng thử lại!');
        return throwError(err);
      })
    );
  }
}
