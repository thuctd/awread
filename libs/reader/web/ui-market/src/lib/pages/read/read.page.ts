/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { UntilDestroy } from '@ngneat/until-destroy';
import { Directive, Injectable, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Chapter } from '@awread/core/chapters';
import { Book, BooksFacade } from '@awread/core/books';
import { ChaptersFacade } from '@awread/core/chapters';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
@Directive()
export class ReadPage implements OnInit {
  chapter: Chapter;
  bookId: string;
  chapterId: string;
  topBookList$ = this.booksFacade.topBooks$;
  bookChapters$ = this.chaptersFacade.chapters$;
  breadcrumbs;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private chaptersFacade: ChaptersFacade, private cd: ChangeDetectorRef, private booksFacade: BooksFacade) { }

  ngOnInit(): void {
    this.bookId = this.activatedRoute.snapshot.paramMap.get('bookId');
    this.chapterId = this.activatedRoute.snapshot.paramMap.get('chapterId');
    this.activatedRoute.paramMap
      .pipe(
        switchMap((params) => {
          return this.chaptersFacade.getChapterDetail(params.get('bookId'), params.get('chapterId')).pipe(
            tap((chapter) => {
              this.chaptersFacade.getAllChapters(chapter[0].bookId).subscribe();
            })
          );
        })
      )
      .subscribe((chapter) => {
        this.chapter = chapter[0];
        console.log(this.chapter);

        this.breadcrumbs = this.getbreadcrumbs();
      });
    this.booksFacade.getTopBooks().subscribe();
  }

  getbreadcrumbs() {
    return [{
      title: 'Home',
      link: ['/']
    },
    {
      title: this.chapter.book.type,
      link: ['/', this.chapter.book.type, { categoryId: this.chapter.book.categoryId }]
    },
    {
      title: this.chapter.book.title,
      link: ['/', 'books', this.bookId]
    }];
  }

  onChangeNextChapter(chapter: Chapter) {
    const offset = parseInt(chapter.position);
    this.chaptersFacade.getPageChapter(chapter.bookId, offset + 1).pipe(
      tap(res => {
        this.router.navigate(['/books', this.bookId, 'chapters', res[0].chapterId]);
      })
    ).subscribe();
    this.cd.detectChanges();
  }

  onChangeBackChapter(chapter: Chapter) {
    const offset = parseInt(chapter.position);
    this.chaptersFacade.getPageChapter(chapter.bookId, offset - 1).pipe(
      tap(res => {
        this.router.navigate(['/books', this.bookId, 'chapters', res[0].chapterId]);
      })
    ).subscribe();
    this.cd.detectChanges();
  }
}
