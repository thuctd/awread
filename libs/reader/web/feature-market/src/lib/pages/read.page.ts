/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { UntilDestroy } from '@ngneat/until-destroy';
import { Directive, Injectable, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Chapter } from '@awread/core/chapters';
import { BooksFacade } from 'libs/core/books/src/lib/facades/books.facade';
import { ChaptersFacade } from 'libs/core/chapters/src/lib/facades/chapters.facade';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
@Directive()
export class ReadPage implements OnInit {
  chapter: Chapter;
  bookId;
  chapterId;
  topBookList$ = this.booksFacade.topBooks$;
  bookChapters$ = this.chaptersFacade.chapters$;
  get breadcrumbs(): string[] {
    return ['Home', this.chapter?.title, this.chapter?.title];
  }

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
      });
    this.booksFacade.getTopBooks().subscribe();
  }

  navigateToChapter(chapter: Chapter) {
    console.log(chapter);
    // this.router.navigate(['/books', chapter.bookId, 'chapters', chapter.chapterId]);
  }

  onChangeNextChapter() {
    if (!this.chapterId) {
      this.backHome();
      return;
    }
  }

  onChangeBackChapter() {
    if (!this.chapterId) {
      this.backHome();
      return;
    }
  }

  private backHome() {
    this.router.navigate(['/']);
  }
}
