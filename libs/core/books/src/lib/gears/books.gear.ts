import { SearchBooksStore } from './../states/search-books/search-books.store';
import { TopBooksStore } from './../states/top-books/top-books.store';
import { AuthorBooksStore } from './../states/author-books/author-books.store';
import { GenreBooksStore } from './../states/genre-books/genre-books.store';
import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { BooksApi } from '../apis';
import { BooksStore } from '../states/books';

import { TransformBookDataGear } from './transform-book-data.gear';
import { CategoryBooksStore } from '../states/category-books';

@Injectable({ providedIn: 'root' })
export class BooksGear {

  constructor(
    private transformBookDataGear: TransformBookDataGear,
    private categoryBooksStore: CategoryBooksStore,
    private searchBooksStore: SearchBooksStore,
    private authorBooksStore: AuthorBooksStore,
    private genreBooksStore: GenreBooksStore,
    private topBooksStore: TopBooksStore,
    private booksStore: BooksStore,
    private booksApi: BooksApi,
  ) { }

  getAllBooks() {
    return this.booksApi.getAllBooks().pipe(
      map((result) => result.map(book => this.transformBookDataGear.tranformBookData(book))),
      tap(books => this.booksStore.set(books))
    );
  }

  getCategoryBooks(categoryId: string) {
    return this.booksApi.getCategoryBooks(categoryId).pipe(
      map((result) => result.map(book => this.transformBookDataGear.tranformBookData(book))),
      tap(books => this.categoryBooksStore.set(books))
    );
  }


  getCollectedBooks() {
    return this.booksApi.getCollectedBooks().pipe(
      tap((res) => {

      }),
    );
  }

  getComposedBooks() {
    return this.booksApi.getComposedBooks().pipe(
      tap((books) => {

      }),
    );
  }

  getAuthorBooks(authorId: string) {
    return this.booksApi.getAuthorBooks(authorId).pipe(
      map((result) => result.map(book => this.transformBookDataGear.tranformBookHomeData(book))),
      tap(books => this.authorBooksStore.set(books))
    );
  }

  getGenreBooks(genreId: string) {
    return this.booksApi.getGenreBooks(genreId).pipe(
      map((books) => {
        return books;
      }),
      tap(books => this.genreBooksStore.set(books))
    );
  }

  getBookById(bookId: string) {
    return this.booksApi.getBookById(bookId).pipe(
      map((result) => result.map(book => this.tranformBookDetailData(book))),
    );
  }

  getTopBooks() {
    return this.booksApi.getTopBooks().pipe(
      map((result) => result.map(book => this.transformBookDataGear.tranformBookHomeData(book))),
      tap(books => this.topBooksStore.set(books))
    );
  }

  getFilterBooks(filters) {
    return this.booksApi.getFilterBooks(filters);
  }

  searhBookByTermApi(term: string) {
    return this.booksApi.searchBookByTerm(term).pipe(
      map((result) => result.map(book => {
        const categoryName = book['categoryByCategoryId'].name;
        return {
          ...book,
          categoryName
        };
      })),
      tap(books => this.searchBooksStore.set(books)));
  }

  private tranformBookDetailData(book) {
    const authors = JSON.parse(book['authors'].split('/'));
    const genreIds = JSON.parse(book['genres'].split('/'));
    return {
      ...book,
      authors,
      genreIds
    };
  }
}
