import { SearchBooksStore } from './../states/search-books/search-books.store';
import { TopBooksStore } from './../states/top-books/top-books.store';
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
    private searchBooksStore: SearchBooksStore,
    private authorBooksStore: AuthorBooksStore,
    private genreBooksStore: GenreBooksStore,
    private topBooksStore: TopBooksStore,
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
          res['data']['allAuthors'] &&
          res['data']['allAuthors']['nodes'].length
        ) {
          this.authorBooksStore.set(res['data']['allAuthors']['nodes']);
        }
        return [];
      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

  getGenreBooks(genreId: string) {
    return this.booksApi.getGenreBooks(genreId).pipe(
      map((res) => {
        if (
          res['data'] &&
          res['data']['allVRandomBooks'] &&
          res['data']['allVRandomBooks']['nodes'].length
        ) {
          const result = res['data']['allVRandomBooks']['nodes'];
          const books = result.map((book) => {
            return {
              ...book
            };
          });
          return books;
        }
      }),
      tap((res) => {
        if (res.length) {
          this.genreBooksStore.set([]);
          this.genreBooksStore.set(res);
        } else {
          this.genreBooksStore.set([]);
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
      map((res) => {
        if (
          res['data'] &&
          res['data']['allMvDetailBooks'] &&
          res['data']['allMvDetailBooks']['nodes'].length
        ) {
          const book = res['data']['allMvDetailBooks']['nodes'];
          return book;
        }
        return [];
      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

  getTopBooks() {
    return this.booksApi.getTopBooks().pipe(
      map((res) => {
        if (
          res['data'] &&
          res['data']['allMvMostViewBooks'] &&
          res['data']['allMvMostViewBooks']['nodes'].length
        ) {
          const result = res['data']['allMvMostViewBooks']['nodes'];
          const books = result.map((book) =>
            this.transformBookDataGear.tranformBookHomeData(book)
          );
          this.topBooksStore.set(books);
        }
        return [];
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
    return this.booksApi.searchBookByTerm(term).pipe(
      tap((res) => {
        if (
          res['data'] &&
          res['data']['searchBooks'] &&
          res['data']['searchBooks']['books'].length
        ) {
          const result = res['data']['searchBooks']['books'];
          this.searchBooksStore.set(result);
        }
      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

}
