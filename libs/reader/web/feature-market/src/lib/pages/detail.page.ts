import { Chapter } from './../models/chapter.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectorRef, Directive, Injectable, OnDestroy, OnInit } from '@angular/core';
import { BooksFacade } from '../facades';
import { map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { ChaptersFacade } from '../facades/chapters.facede';
import { of, Subject } from 'rxjs';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
@Directive()
export class DetailPage implements OnInit, OnDestroy {
  book$;
  bookId: string;
  destroy$ = new Subject();
  isLoading$ = this.booksFacade.selectLoadingAkita();
  topBookList$ = this.booksFacade.topBookList$;
  authorBookList$ = this.booksFacade.authorBookList$;
  chapterListByBookId$ = this.chaptersFacade.chapterListByBookId$;
  bookChapter: Chapter[]

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private booksFacade: BooksFacade,
    private chaptersFacade: ChaptersFacade,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.bookId = this.activatedRoute.snapshot.params['bookId'];
    this.activatedRoute.paramMap.pipe(
      map(params => params.get('bookId')),
      switchMap(id => this.booksFacade.getDetailBook(id).pipe(
        tap(book => {
          this.booksFacade.getAuthorBooks(book.authorId).subscribe();
          this.chaptersFacade.getAllChapters(book.id).subscribe(chapters => {
            this.bookChapter = chapters
          })
        })
      )),
    ).subscribe(book => this.book$ = book)
    this.booksFacade.getTopBooks().subscribe();
    this.getAllChapters();
  }

  private getAllChapters() {
    return this.activatedRoute.paramMap
      .pipe(
        takeUntil(this.destroy$),
        switchMap((params) => {
          const bookId = params.get('bookId');
          const chapters = this.chaptersFacade.getAllAkita();
          if (this.bookId === bookId && bookId && chapters.length) {
            // lay trong akita
            return this.chaptersFacade.selectAllChapterAkita();
          }
          if (bookId) {
            return this.chaptersFacade.getAllChapters(bookId);
          }
          return of([]);
        })
      )
      .subscribe((res) => {
        console.log('all chapters res: ', res);
        this.cd.detectChanges();
      });
  }

  OnChangeFirstChapter() {
    this.router.navigate(['/books', this.bookId, 'chapters', this.bookChapter[0].id])
  }

  OnChangeLastChapter() {
    this.router.navigate(['/books', this.bookId, 'chapters', this.bookChapter[this.bookChapter.length - 1].id])
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
