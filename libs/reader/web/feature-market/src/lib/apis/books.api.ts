import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { of } from 'rxjs';
import { delay, take } from 'rxjs/operators';
import db from './db.json';

@Injectable({ providedIn: 'root' })
export class BooksApi {
  constructor(
    private apollo: Apollo,
  ) { }

  get() { }

  searchBookByTerm(term: string) {
    return of(db.books.filter(book => book.title.toLowerCase().includes(term.toLowerCase())))
      .pipe(delay(500));
  }

  getAllBooks() {
    return of(db.books)
      .pipe(delay(500));
  }

  getGoodBooks() {
    return of(db.books.slice(0, 5))
      .pipe(delay(500));
  }

  getFeatureBooks() {
    return of(db.books.slice(0, 8))
      .pipe(delay(500));
  }

  getLatestBooks() {
    return of(db.books)
      .pipe(delay(500));
  }

  getCategoryBooks(categoryId: string) {
    return of(db.books.filter(book => book.category === categoryId))
      .pipe(delay(500));
  }

  getTopBooks() {
    return of(db.books.slice(0, 3))
      .pipe(delay(500));
  }

  getAuthorBooks(authorId: string) {
    return of(db.books.filter(book => book.authorId === authorId))
      .pipe(delay(500));
  }

  getGenreBooks(genreId: string) {
    return of(db.books.filter(book => book.genres.find(
      genre => genre === genreId
    ))).pipe(delay(500));
  }

  getBookById(bookId: string) {
    return of(db.books.find(book => book.id === bookId))
      .pipe(delay(500));
  }

}
