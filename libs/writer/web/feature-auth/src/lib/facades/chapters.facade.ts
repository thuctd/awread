import { Router } from '@angular/router';
import { delay, switchMap } from 'rxjs/operators';
import { tap, catchError, concatMap } from 'rxjs/operators';
import { BooksFacade } from '@awread/writer/web/feature-auth';
import { Injectable } from '@angular/core';
import { ChaptersGear } from '../gears/chapters.gear';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ChaptersFacade {
  constructor(
    private chaptersGear: ChaptersGear,
    private booksFacade: BooksFacade,
    private router: Router
  ) {}

  getChapterDetail(chapterid: string, bookid: string) {
    return this.chaptersGear.getChapterDetail(chapterid, bookid);
  }

  createChapter(chapter) {
    return this.chaptersGear.createChapter(chapter).pipe(
      tap((res) => {
        console.log('createChapter res: ', res);
        this.getChapterDetail(chapter.chapterid, chapter.bookid).refetch();
        this.booksFacade.getAllBooks().refetch();
        this.router.navigate(['detail', { bookId: chapter.bookid }]);
      }),
      catchError((err) => of(err))
    );
  }

  updateChapter(chapter) {
    return this.chaptersGear.updateChapter(chapter).pipe(
      // switchMap((res) => {
      //   return this.booksFacade.getDetailBook(chapter.bookid);
      // }),
      tap((res) => {
        console.log('updateChapter res: ', res);
        this.getChapterDetail(chapter.chapterid, chapter.bookid).refetch();
        this.booksFacade.getAllBooks().refetch();
        this.router.navigate(['detail', { bookId: chapter.bookid }]);
      }),
      catchError((err) => of(err))
    );
  }

  removeChapter(chapterid: string) {
    return this.chaptersGear.removeChapter(chapterid);
  }
}
