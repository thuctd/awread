import { AuthorBooksStore } from './../states/author-books/author-books.store';
import { GenreBooksStore } from './../states/genre-books/genre-books.store';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { BooksApi } from '../apis';
import { BooksStore } from '../states/books';

import { TransformBookDataGear } from './transform-book-data.gear';

@Injectable({ providedIn: 'root' })
export class BooksGear {

  constructor(
    private transformBookDataGear: TransformBookDataGear,
    private genreBooksStore: GenreBooksStore,
    private athorBooksStore: AuthorBooksStore,
    private booksStore: BooksStore,
    private booksApi: BooksApi,
  ) { }

  getAllBooks() {
    return this.booksApi.getAllBooks().pipe(
      tap((res) => {
        if (
          res['data'] &&
          res['data']['allBooks'] &&
          res['data']['allBooks']['nodes'].length
        ) {
          const result = res['data']['allBooks']['nodes'];
          const books = result.map((book) =>
            this.transformBookDataGear.tranformBookData(book)
          );
          this.booksStore.set(books);
        }
      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

  getCategoryBooks(categoryId: string) {
    return this.booksApi.getCategoryBooks(categoryId).pipe(
      tap((res) => {
        if (
          res['data'] &&
          res['data']['allBooks'] &&
          res['data']['allBooks']['nodes'].length
        ) {
          const result = res['data']['allBooks']['nodes'];
          const books = result.map((book) =>
            this.transformBookDataGear.tranformBookData(book)
          );
          this.booksStore.set(books);
        }
      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }


  getCollectedBooks() {
    return this.booksApi.getCollectedBooks().pipe(
      tap((res) => {

      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

  getComposedBooks() {
    return this.booksApi.getComposedBooks().pipe(
      tap((books) => {

      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

  getAuthorBooks(authorId: string) {
    return this.booksApi.getAuthorBooks(authorId).pipe(
      tap((res) => {
        if (
          res['data'] &&
          res['data']['allBooks'] &&
          res['data']['allBooks']['nodes'].length
        ) {
          const result = res['data']['allBooks']['nodes'];
          const books = result.map((book) =>
            this.transformBookDataGear.tranformBookData(book)
          );
          this.athorBooksStore.set(books);
        }
      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

  getGenreBooks(genreId: string) {
    return this.booksApi.getGenreBooks(genreId).pipe(
      tap((res) => {
        if (
          res['data'] &&
          res['data']['allBooksGenres'] &&
          res['data']['allBooksGenres']['nodes'].length
        ) {
          this.genreBooksStore.set(res['data']['allBooksGenres']['nodes']);
        }
      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

  getBookById(bookId: string) {
    return this.booksApi.getBookById(bookId).pipe(
      tap((res) => {

      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

  getTopBooks() {
    return this.booksApi.getTopBooks().pipe(
      map((books) => {

      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

  getFilterBooks(filters) {
    return this.booksApi.getFilterBooks(filters);
  }

  searhBookByTermApi(term: string) {
    return this.booksApi.searchBookByTerm("Sát").pipe(
      tap((res) => {
        console.log('books', res);
      }),
    );
  }

}
