import { AuthorBooksStore } from './../states/author-books/author-books.store';
import { TopBooksStore } from './../states/top-books/top-books.store';
import { GoodBooksStore } from './../states/good-books/good-books.store';
import { FeatureBooksStore } from './../states/feature-books/feature-books.store';
import { LatestBooksStore } from './../states/latest-books/latest-books.store';
import { GenreBooksStore } from './../states/genre-books/genre-books.store';
import { CategoryBooksStore } from './../states/category-books/category-books.store';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { BooksApi } from '../apis';
import { BooksStore } from '../states/books';

@Injectable({ providedIn: 'root' })
export class BooksGear {

  constructor(
    private booksStore: BooksStore,
    private topBooksStore: TopBooksStore,
    private authorBooksStore: AuthorBooksStore,
    private categoryBooksStore: CategoryBooksStore,
    private genreBooksStore: GenreBooksStore,
    private latestBooksStore: LatestBooksStore,
    private featureBooksStore: FeatureBooksStore,
    private goodBooksStore: GoodBooksStore,
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
        this.goodBooksStore.set(books);
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
        this.featureBooksStore.set(books);
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
        this.latestBooksStore.set(books);
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
        this.categoryBooksStore.set(books);
      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

  getTopBooks() {
    return this.booksApi.getTopBooks().pipe(
      tap((books) => {
        console.log('get top books: ', books);
        this.topBooksStore.set(books);
      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

  getAuthorBooks(authorId: string) {
    return this.booksApi.getAuthorBooks(authorId).pipe(
      tap((books) => {
        console.log('get author books: ', books);
        this.authorBooksStore.set(books);
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
        this.genreBooksStore.set(books);
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
