import { ActivatedRoute } from '@angular/router';
import { Directive, Injectable, OnInit } from '@angular/core';
import { BooksFacade } from '../facades';
import { map, switchMap, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Book } from '../models';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class DetailPage implements OnInit {
  book$;
  topBookList$ = this.booksFacade.topBookList$;
  authorBookList$ = this.booksFacade.authorBookList$;

  constructor(
    private activatedRoute: ActivatedRoute,
    private booksFacade: BooksFacade,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      map(params => params.get('bookId')),
      switchMap(id => this.booksFacade.getDetailBook(id)),
    ).subscribe(book => this.book$ = book)
    this.booksFacade.getTopBooks().subscribe();
    this.getAuthorBooks();
  }

  get bookId() {
    return this.activatedRoute.snapshot.params.bookId;
  }


  public getAuthorBooks() {
    this.booksFacade.getAuthorBooks('1').subscribe();
  }

}
