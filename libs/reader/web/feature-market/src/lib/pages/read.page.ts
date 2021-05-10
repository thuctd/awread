import { Directive, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { BooksFacade } from 'libs/core/books/src/lib/facades/books.facade';
import { ChaptersFacade } from 'libs/core/chapters/src/lib/facades/chapters.facade';
@Injectable({
  providedIn: 'root',
})
@Directive()
export class ReadPage implements OnInit {
  chapter$;
  bookId;
  chapterId;
  topBookList$ = this.booksFacade.topBooks$;
  chapterListByBookId$ = this.chaptersFacade.chapters$;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private chaptersFacade: ChaptersFacade, private booksFacade: BooksFacade) { }

  ngOnInit(): void {
    this.bookId = this.activatedRoute.snapshot.paramMap.get('bookId');
    this.chapterId = this.activatedRoute.snapshot.paramMap.get('chapterId');
    this.activatedRoute.paramMap
      .pipe(
        switchMap((params) => {
          return this.chaptersFacade.getChapterDetail(params.get('bookId'), params.get('chapterId')).pipe(
            tap((chapter) => {
              this.chaptersFacade.getAllChapters(chapter['bookId']).subscribe();
            })
          );
        })
      )
      .subscribe((chapter) => {
        this.chapter$ = chapter;
        console.log(this.chapter$);
      });
    this.booksFacade.getTopBooks().subscribe();
  }

  onChangeNextChapter() {
    if (!this.chapterId) {
      this.backHome();
      return;
    }
    console.log('Chapter ID: ', this.chapterId);
  }

  onChangeBackChapter() {
    if (!this.chapterId) {
      this.backHome();
      return;
    }
    console.log('Chapter ID: ', this.chapterId);
  }

  private backHome() {
    this.router.navigate(['/']);
  }
}
