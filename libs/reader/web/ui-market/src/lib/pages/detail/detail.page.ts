/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectorRef, Directive, Injectable, OnDestroy, OnInit } from '@angular/core';
import { map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { of, Subject } from 'rxjs';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Book, BooksFacade } from '@awread/core/books';
import { ChaptersFacade } from '@awread/core/chapters';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
@Directive()
export class DetailPage implements OnInit, OnDestroy {
  book: Book;
  bookId: string;
  authorId: string;
  destroy$ = new Subject();
  isLoading$ = this.booksFacade.selectLoadingAkita();
  topBooks$ = this.booksFacade.topBooks$;
  authorBookList$ = this.booksFacade.authorBooks$;
  chapters$ = this.chaptersFacade.chapters$;
  breadcrumbs;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private booksFacade: BooksFacade,
    private chaptersFacade: ChaptersFacade,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.bookId = this.activatedRoute.snapshot.params['bookId'];
    this.activatedRoute.paramMap
      .pipe(
        map((params) => params.get('bookId')),
        switchMap((id) =>
          this.booksFacade.getDetailBook(id).pipe(
            tap((book) => {
              this.authorId = book[0]['userId'];
              this.booksFacade.getAuthorBooks(book[0].authors).subscribe();
            })
          )
        )
      )
      .subscribe((book) => {
        // console.log('book', book, this.bookId);
        this.book = book[0];
        this.breadcrumbs = this.getbreadcrumbs();
        this.cd.detectChanges();
      });
    this.booksFacade.getTopBooks().subscribe();
    this.getAllChapters();
  }

  getbreadcrumbs() {
    return [
      {
        title: 'Trang chủ',
        link: ['/'],
      },
      {
        title: this.book.type == '0' ? 'Truyện tự sáng tác' : 'Truyện sưu tầm',
        link: ['/', this.book.type == '0' ? 'composed' : 'collected', { categoryId: this.book.categoryId }],
      },
      {
        title: this.book.title,
        link: ['/', 'books', this.bookId],
      },
    ];
  }

  private getAllChapters() {
    return this.activatedRoute.paramMap
      .pipe(
        takeUntil(this.destroy$),
        switchMap((params) => {
          const bookId = params.get('bookId');

          if (bookId) {
            return this.chaptersFacade.getAllChapters(bookId);
          }
          return of([]);
        })
      )
      .subscribe((res) => {
        this.cd.detectChanges();
      });
  }

  OnChangeFirstChapter() {
    return this.activatedRoute.paramMap
      .pipe(
        takeUntil(this.destroy$),
        switchMap(() => {
          if (this.bookId) {
            return this.chaptersFacade.getAllChapters(this.bookId).pipe(
              tap((chapters) => {
                return this.router.navigate(['/books', this.bookId, 'chapters', chapters[0].chapterId]);
              })
            );
          }
          return this.router.navigate(['/not-found']);
        })
      )
      .subscribe((res) => {
        this.cd.detectChanges();
      });
  }

  OnChangeLastChapter() {
    return this.activatedRoute.paramMap
      .pipe(
        takeUntil(this.destroy$),
        switchMap(() => {
          if (this.bookId) {
            return this.chaptersFacade.getAllChapters(this.bookId).pipe(
              tap((chapters) => {
                return this.router.navigate([
                  '/books',
                  this.bookId,
                  'chapters',
                  chapters[chapters.length - 1].chapterId,
                ]);
              })
            );
          }
          return this.router.navigate(['/not-found']);
        })
      )
      .subscribe((res) => {
        this.cd.detectChanges();
      });
  }

  nativeBooksAuthor() {
    this.router.navigate(['/', this.authorId, 'books']);
  }

  nativeTopBook() {
    this.router.navigate(['/top-books']);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
