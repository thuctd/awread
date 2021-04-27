/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Injectable } from '@angular/core';
import { BooksHomeGear } from '../gears/books-home.gear';
import { BooksGear } from '../gears/books.gear';

import { ComposedQuery } from 'libs/reader/web/feature-market/src/lib/states/composed';
import { TopBooksQuery } from 'libs/reader/web/feature-market/src/lib/states/top-books';
import { CollectedQuery } from 'libs/reader/web/feature-market/src/lib/states/collected';
import { GoodBooksQuery } from 'libs/reader/web/feature-market/src/lib/states/good-books';
import { GenreBooksQuery } from 'libs/reader/web/feature-market/src/lib/states/genre-books';
import { BooksStore, BooksQuery } from 'libs/reader/web/feature-market/src/lib/states/books';
import { AuthorBooksQuery } from 'libs/reader/web/feature-market/src/lib/states/author-books';
import { LatestBooksQuery } from 'libs/reader/web/feature-market/src/lib/states/latest-books';
import { FeatureBooksQuery } from 'libs/reader/web/feature-market/src/lib/states/feature-books';
import { CategoryBooksQuery } from 'libs/reader/web/feature-market/src/lib/states/category-books';


@Injectable({ providedIn: 'root' })
export class BooksFacade {

  books$ = this.booksQuery.selectAll();
  topBooks$ = this.topBooksQuery.selectAll();
  composeds$ = this.composedQuery.selectAll();
  goodBooks$ = this.goodBooksQuery.selectAll();
  collected$ = this.collectedQuery.selectAll();
  isLoading$ = this.booksQuery.selectLoading();
  genreBooks$ = this.genreBooksQuery.selectAll();
  authorBooks$ = this.authorBooksQuery.selectAll();
  latestBooks$ = this.latestBooksQuery.selectAll();
  featureBooks$ = this.featureBooksQuery.selectAll();
  categoryBooks$ = this.categoryBooksQuery.selectAll();

  constructor(
    private booksGear: BooksGear,
    private booksStore: BooksStore,
    private booksQuery: BooksQuery,
    private booksHomeGear: BooksHomeGear,
    private composedQuery: ComposedQuery,
    private collectedQuery: CollectedQuery,
    private topBooksQuery: TopBooksQuery,
    private goodBooksQuery: GoodBooksQuery,
    private genreBooksQuery: GenreBooksQuery,
    private authorBooksQuery: AuthorBooksQuery,
    private latestBooksQuery: LatestBooksQuery,
    private featureBooksQuery: FeatureBooksQuery,
    private categoryBooksQuery: CategoryBooksQuery,
  ) { }

  selectLoadingAkita() {
    return this.booksQuery.selectLoading();
  }

  setLoading(isLoading = false) {
    this.booksStore.setLoading(isLoading);
  }

  setBookIdActiveAkita(bookid: string) {
    return this.booksStore.setActive(bookid);
  }

  getBookIdActiveAkita() {
    return this.booksQuery.getActiveId();
  }

  selectEntityBook(id: string) {
    return this.booksQuery.selectEntity(id);
  }

  getAllBooks() {
    return this.booksGear.getAllBooks();
  }

  getDetailBook(bookId: string) {
    return this.booksGear.getBookById(bookId);
  }

  getGenreBooks(genreId: string) {
    return this.booksGear.getGenreBooks(genreId);
  }

  getCategoryBooks(categoryId: string) {
    return this.booksGear.getCategoryBooks(categoryId);
  }

  getLatestBooks() {
    return this.booksHomeGear.getLatestBooks();
  }

  getAuthorBooks(authorId: string) {
    return this.booksGear.getAuthorBooks(authorId);
  }

  getTopBooks() {
    return this.booksHomeGear.getTopBooks();
  }

  getGoodBooks() {
    return this.booksHomeGear.getGoodBooks();
  }

  getFeatureBooks() {
    return this.booksHomeGear.getFeatureBooks();
  }

  getCollectedBooks() {
    return this.booksGear.getCollectedBooks();
  }

  getComposedBooks() {
    return this.booksGear.getComposedBooks();
  }

  getFilterBooks() {
    return this.booksGear.getFilterBooks(this.booksQuery.getCurrentFilter());
  }

  searchBookApi(term: string) {
    if (term === '') {
      return this.booksGear.getAllBooks();
    } else {
      return this.booksGear.searhBookByTermApi(term);
    }
  }
}
