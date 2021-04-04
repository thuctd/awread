import { ActivatedRoute } from '@angular/router';
import { Directive, Injectable, OnInit } from '@angular/core';
import { BooksFacade } from '../facades';
import { map, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class DetailPage implements OnInit {
  book$;
  authorId;
  topBookList$ = this.booksFacade.topBookList$;
  authorBookList$ = this.booksFacade.authorBookList$;

  constructor(
    private activatedRoute: ActivatedRoute,
    private booksFacade: BooksFacade,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      map(params => params.get('bookId')),
      switchMap(id => this.booksFacade.getDetailBook(id).pipe(
        tap(book => {
          this.authorId = book.authorId
          this.booksFacade.getAuthorBooks(this.authorId).subscribe();
        })
      )),
    ).subscribe(book => this.book$ = book)
    this.booksFacade.getTopBooks().subscribe();
  }

}
