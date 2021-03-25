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
      .pipe(delay(500));

  }

  getBookById(bookId: string) {
    return of(db.books.find(book => book.id === bookId))
      .pipe(delay(500));
  }

  getBooksByGenresId(genreId: string) {
    return of(db.books = db.books.filter((book) => {
      book.genres.includes(genreId)
    }
    )).pipe(delay(500));
  }

}
