import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectorRef, Directive, Injectable, OnDestroy, OnInit } from '@angular/core';
import { map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { of, Subject } from 'rxjs';
import { UntilDestroy } from '@ngneat/until-destroy';
import { BooksFacade } from 'libs/core/books/src/lib/facades/books.facade';
import { ChaptersFacade } from 'libs/core/chapters/src/lib/facades/chapters.facade';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
@Directive()
export class DetailPage implements OnInit, OnDestroy {
  book$;
  bookId: string;
  authorId: string;
  destroy$ = new Subject();
  isLoading$ = this.booksFacade.selectLoadingAkita();
  topBookList$ = this.booksFacade.topBooks$;
  authorBookList$ = this.booksFacade.authorBooks$;
  chapters$ = this.chaptersFacade.chapters$;
  bookChapter;

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
          this.authorId = book[0]['userId'];
          this.booksFacade.getAuthorBooks(this.authorId).subscribe();
        })
      )),
    ).subscribe(book => {
      this.book$ = book[0];
      console.log(this.book$);
    })
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
    this.router.navigate(['/books', this.bookId, 'chapters', this.bookChapter[0].chapterId])
  }

  OnChangeLastChapter() {
    this.router.navigate(['/books', this.bookId, 'chapters', this.bookChapter[this.bookChapter.length - 1].chapterId])
  }

  nativeBooksAuthor() {
    this.router.navigate(['/author', this.authorId]);
  }

  nativeTopBook() {
    this.router.navigate(['/top-book']);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
