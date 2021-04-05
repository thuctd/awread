import { ActivatedRoute } from '@angular/router';
import { Directive, Injectable, OnInit } from '@angular/core';
import { BooksFacade } from '../facades';
import { map, switchMap, tap } from 'rxjs/operators';
import { ChaptersFacade } from '../facades/chapters.facede';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class DetailPage implements OnInit {
  book$;
  authorId;
  topBookList$ = this.booksFacade.topBookList$;
  authorBookList$ = this.booksFacade.authorBookList$;
  chapterListByBookId$ = this.chaptersFacade.chapterListByBookId$;

  constructor(
    private activatedRoute: ActivatedRoute,
    private booksFacade: BooksFacade,
    private chaptersFacade: ChaptersFacade
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      map(params => params.get('bookId')),
      switchMap(id => this.booksFacade.getDetailBook(id).pipe(
        tap(book => {
          this.authorId = book.authorId
          this.booksFacade.getAuthorBooks(this.authorId).subscribe();
          this.chaptersFacade.getAllChapters(book.id).subscribe();
        })
      )),
    ).subscribe(book => this.book$ = book)
    this.booksFacade.getTopBooks().subscribe();
  }

}
