import { Injectable } from '@angular/core';
import { tap, map, mergeMap } from 'rxjs/operators';
import { ChaptersApi } from '../apis/chapters.api';
import { ChaptersQuery, ChaptersStore } from '../states/chapters';
import { SnackbarService } from '@awread/global/packages';
import { Order } from '@datorama/akita';
import { CreationsFacade } from '@awread/core/creations';
import { of } from 'rxjs';
import { Location } from '@angular/common';
@Injectable({ providedIn: 'root' })
export class ChaptersGear {
  constructor(
    private chaptersApi: ChaptersApi,
    private chaptersStore: ChaptersStore,
    private SnackbarService: SnackbarService,
    private chaptersQuery: ChaptersQuery,
    private creationsFacade: CreationsFacade,
    private location: Location
  ) {}

  getLatestPosition() {
    const [latestChapter] = this.chaptersQuery.getAll({ sortBy: 'position', sortByOrder: Order.DESC, limitTo: 1 });
    if (latestChapter) {
      return +latestChapter.position + 1;
    } else {
      return 0;
    }
  }

  fetchLatestChapterPosition(bookId) {
    return this.chaptersApi.getLatestPosition(bookId).pipe(
      map(([latestChapter]) => {
        console.log('latestChapter', latestChapter);
        if (latestChapter) {
          return +latestChapter.position + 1;
        } else {
          return 0;
        }
      })
    );
  }

  getChapter(bookId: string, chapterId: string) {
    return this.chaptersApi.getChapter(bookId, chapterId).pipe(
      map((chapter) => ({
        ...chapter,
        content: chapter?.['contentByChapterId'].content,
        book: chapter?.['bookByBookId'],
      }))
    );
  }

  getAllChapters(bookId: string) {
    this.chaptersStore.setLoading(true);
    return this.chaptersApi.getAllChapters(bookId).pipe(
      map((chapters) => {
        return this.transformDataChapters(chapters);
      }),
      tap((chapters) => {
        this.chaptersStore.set(chapters);
      }),
      tap(() => {
        this.chaptersStore.setLoading(false);
      })
    );
  }

  getChapterDetail(bookId: string, chapterId: string) {
    return this.chaptersApi.getChapterDetail(bookId, chapterId).pipe(
      map((result) =>
        result.map((chapter) => {
          const content = chapter['contentByChapterId']?.content;
          const book = chapter['bookByBookId'];
          return { ...chapter, content, book };
        })
      )
    );
  }

  getPageChapter(bookId: string, offset: number) {
    return this.chaptersApi.getPageChapter(bookId, offset).pipe(
      map((result) => {
        return result;
      })
    );
  }

  private transformDataChapters(chapters) {
    return chapters.map((item, index) => {
      return { ...item };
    });
  }

  update(chapter, publishThisBook = false) {
    return this.chaptersApi.update(chapter).pipe(
      tap((result) => {
        if (result.errors) {
          result.errors.forEach((error) => this.SnackbarService.showError(error.message));
        } else {
          this.SnackbarService.showSuccess('Lưu chương thành công');
        }
      }),
      mergeMap((result) => {
        if (result.errors) {
          result.errors.forEach((error) => this.SnackbarService.showError(error.message));
          return of(result.errors);
        } else {
          if (publishThisBook) {
            return this.creationsFacade.publish(chapter.bookId);
          } else {
            return of(result);
          }
        }
      })
    );
  }

  create(chapter, publishThisChapter = false, publishThisBook = false) {
    return this.chaptersApi.create(chapter).pipe(
      tap((result) => {
        if (result.errors) {
          result.errors.forEach((error) => this.SnackbarService.showError(error.message));
        } else {
          if (publishThisChapter) {
            this.SnackbarService.showSuccess('Đã xuất bản chương mới');
            this.location.back();
          } else {
            this.SnackbarService.showSuccess('Tạo chương mới thành công');
          }
        }
      }),
      mergeMap((result) => {
        if (result.errors) {
          result.errors.forEach((error) => this.SnackbarService.showError(error.message));
          return of(result.errors);
        } else {
          if (publishThisBook) {
            return this.creationsFacade.publish(chapter.bookId);
          } else {
            return of(result?.data?.['newChapter']?.['uuid']);
          }
        }
      })
    );
  }

  delete(chapterId) {
    return this.chaptersApi.delete(chapterId).pipe(
      tap((result) => {
        if (result.errors) {
          result.errors.forEach((error) => this.SnackbarService.showError(error.message));
        } else {
          this.SnackbarService.showSuccess('Đã xóa chương');
          this.chaptersStore.remove(chapterId);
        }
      })
    );
  }
}
