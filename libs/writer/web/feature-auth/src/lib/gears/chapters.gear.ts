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
      map((res) => {
        if (
          res['data'] &&
          res['data']['allChapters'] &&
          res['data']['allChapters']['nodes'].length
        ) {
          const chapters = res['data']['allChapters']['nodes'];
          // data chapter tra ve theo thu tu gioam dan de hien thi cac chuong moi nhat
          return this.transformDataChapters(chapters);
          // .sortBy((a, b) => {
          //   if (a.chapterNumber < b.chapterNumber) {
          //     return 1;
          //   }
          //   return -1;
          // });
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

  createChapter(chapter: Chapter, isPublishedBook: boolean) {
    const chapterid = this.firebaseFirestoreAddon.createId();
    const chapterDetail = { ...chapter, chapterid };
    return this.chaptersApi.createChapter(chapterDetail, isPublishedBook).pipe(
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
          const chapters = this.chapterQuery.getAll().filter(item => item.chapterid !== chapterid);
          this.booksStore.updateTotalChapterCount(  bookId, isRemoveChapterPublished, -1  );
          this.chaptersStore.set(this.transformDataChapters(chapters));
        }
      }),
      catchError((err) => {
        this.snackbarsService.error('Đã xảy ra lỗi. Vui lòng thử lại!');
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
