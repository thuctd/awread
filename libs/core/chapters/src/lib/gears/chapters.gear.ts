import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { ChaptersApi } from '../apis/chapters.api';
import { ChaptersQuery, ChaptersStore } from '../states/chapters';
import { SnackbarService } from '@awread/global/packages';
import { Order } from '@datorama/akita';
@Injectable({ providedIn: 'root' })
export class ChaptersGear {

  constructor(
    private chaptersApi: ChaptersApi,
    private chaptersStore: ChaptersStore,
    private SnackbarService: SnackbarService,
    private chaptersQuery: ChaptersQuery,
  ) {
  }

  getLatestPosition() {
    const [latestChapter] = this.chaptersQuery.getAll({ sortBy: 'position', sortByOrder: Order.DESC, limitTo: 1 });
    if (latestChapter) {
      return +latestChapter.position + 1;
    } else {
      return 0;
    }
  }

  getChapter(chapterId: string, bookId: string) {
    return this.chaptersApi.getChapter(chapterId, bookId)
      .pipe(
        map((chapter => ({
          ...chapter,
          content: chapter['contentByChapterId'].content,
          book: chapter['bookByBookId']
        })
        ))
      )
  }

  getAllChapters(bookId: string) {
    this.chaptersStore.setLoading(true);
    return this.chaptersApi.getAllChapters(bookId).pipe(
      map((chapters) => { return this.transformDataChapters(chapters) }),
      tap(chapters => { this.chaptersStore.set(chapters) }),
      tap(() => { this.chaptersStore.setLoading(false) }),
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

  getPageChapter(bookId: string, offset: number) {
    return this.chaptersApi.getPageChapter(bookId, offset).pipe(
      map((result) => {
        return result;
      }),
    );
  }

  private transformDataChapters(chapters) {
    let chapterLength = chapters.length;
    return chapters.map((item, index) => {
      chapterLength = chapterLength - 1;
      return { ...item, chapterNumber: chapterLength + 1 };
    });
  }

  update(chapter) {
    return this.chaptersApi.update(chapter)
      .pipe(
        tap(result => {
          if (result.errors) {
            result.errors.forEach(error => this.SnackbarService.showError(error.message));
          } else {
            this.SnackbarService.showSuccess('Lưu chương thành công');
          }
        })
      )
  }

  create(chapter) {
    return this.chaptersApi.create(chapter)
      .pipe(
        tap(result => {
          if (result.errors) {
            result.errors.forEach(error => this.SnackbarService.showError(error.message));
          } else {
            this.SnackbarService.showSuccess('Tạo chương mới thành công');
          }
        })
      )
  }

  delete(chapterId) {
    return this.chaptersApi.delete(chapterId).pipe(
      tap(result => {
        if (result.errors) {
          result.errors.forEach(error => this.SnackbarService.showError(error.message));
        } else {
          this.SnackbarService.showSuccess('Đã xóa chương');
          this.chaptersStore.remove(chapterId);
        }
      })
    )
  }
}
