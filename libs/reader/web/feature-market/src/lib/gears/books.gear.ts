import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { BooksApi } from '../apis';
import { BooksStore } from '../states/books';

@Injectable({ providedIn: 'root' })
export class BooksGear {

  constructor(
    private booksStore: BooksStore,
    private booksApi: BooksApi
  ) { }

  getAllBooks() {
    return this.booksApi.getAllBooks().pipe(
      tap((books) => {
        this.booksStore.set(books);
      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

  getGoodBooks() {
    return this.booksApi.getGoodBooks().pipe(
      tap((books) => {
        console.log('get books new: ', books);
        this.booksStore.set(books);
      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

  getFeatureBooks() {
    return this.booksApi.getFeatureBooks().pipe(
      tap((books) => {
        console.log('get books: ', books);
        this.booksStore.set(books);
      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

  getLatestBooks() {
    return this.booksApi.getLatestBooks().pipe(
      tap((books) => {
        console.log('get books: ', books);
        this.booksStore.set(books);
      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

  getCategoryBooks(categoryId: string) {
    return this.booksApi.getCategoryBooks(categoryId).pipe(
      tap((books) => {
        console.log('get category books: ', books);
        this.booksStore.set(books);
      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

  getGenreBooks(genreId: string) {
    return this.booksApi.getGenreBooks(genreId).pipe(
      tap((books) => {
        console.log('genre books: ', books);
        this.booksStore.set(books);
      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

  getBookById(bookId: string) {
    return this.booksApi.getBookById(bookId).pipe(
      tap((book) => console.log('detail books: ', book)),
      tap((book) => this.booksStore.add(book)),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

}
