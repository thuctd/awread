import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import db from './db.json';

@Injectable({ providedIn: 'root' })
export class BooksApi {
  constructor(
    private apollo: Apollo,
  ) { }

  get() { }

  getAllBooks() {
    return of(db.books)
      .pipe(delay(500));

  }

  getBookById(bookId: string) {
    return of(db.books.find(book => book.id === bookId))
      .pipe(delay(500));
  }

}
