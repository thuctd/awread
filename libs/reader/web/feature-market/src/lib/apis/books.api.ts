import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import db from './db.json';

@Injectable({ providedIn: 'root' })
export class BooksApi {
  //TODO: tạm thời fake data ở đây 
  constructor(
    private apollo: Apollo,
  ) { }

  get() { }

  getAllBooks() {
    return of(db.books)
      .pipe(delay(500)); //NOTE: fake delay để cho giống lấy dữ liệu từ server

  }

  getBookById(bookId: string) {
    return of(db.books.find(book => book.id === bookId))
      .pipe(delay(500)); //NOTE: fake delay để cho giống lấy dữ liệu từ server
  }
}
