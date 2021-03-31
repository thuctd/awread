import { FormControl } from '@angular/forms';
import { BooksFacade } from '@awread/reader/web/feature-market';
import { Directive, Injectable, OnInit } from '@angular/core';
import { Book } from '../models';
import { BooksQuery } from '../states/books';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class SearchPage implements OnInit {
  bookList$ = this.booksFacade.bookList$;
  searchControl: FormControl = new FormControl('');
  results$: Observable<Book[]>;

  constructor(private booksFacade: BooksFacade, private booksQuery: BooksQuery) { }

  ngOnInit(): void {
    this.booksFacade.getAllBooks().subscribe();
  }
}
