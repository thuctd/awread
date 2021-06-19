import { LatestBooksStore } from './../states/latest-books';
import { SearchBooksQuery } from './../states/search-books';
import { Injectable } from '@angular/core';
import { BooksHomeGear } from '../gears/books-home.gear';
import { BooksGear } from '../gears/books.gear';
import { AuthorBooksQuery } from '../states/author-books';
import { BooksQuery, BooksStore } from '../states/books';
import { CategoryBooksQuery } from '../states/category-books';
import { CollectedQuery } from '../states/collected';
import { ComposedQuery } from '../states/composed';
import { FeatureBooksQuery, FeatureBooksStore } from '../states/feature-books';
import { GenreBooksQuery, GenreBooksStore } from '../states/genre-books';
import { GoodBooksQuery } from '../states/good-books';
import { LatestBooksQuery } from '../states/latest-books';
import { TopBooksQuery } from '../states/top-books';
import { SearchBooksStore } from '../states/search-books';

@Injectable({ providedIn: 'root' })
export class BooksFacade {
  books$ = this.booksQuery.selectAll();
  topBooks$ = this.topBooksQuery.selectAll();
  composed$ = this.composedQuery.selectAll();
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
    public booksQuery: BooksQuery,
    private booksHomeGear: BooksHomeGear,
    private composedQuery: ComposedQuery,
    public topBooksQuery: TopBooksQuery,
    private collectedQuery: CollectedQuery,
    public goodBooksQuery: GoodBooksQuery,
    private genreBooksQuery: GenreBooksQuery,
    public authorBooksQuery: AuthorBooksQuery,
    public latestBooksQuery: LatestBooksQuery,
    public featureBooksQuery: FeatureBooksQuery,
    public categoryBooksQuery: CategoryBooksQuery,
    public searchBooksQuery: SearchBooksQuery,
    public latestBooksStore: LatestBooksStore,
    public featureBooksStore: FeatureBooksStore,
    public genreBooksStore: GenreBooksStore,
    private searchBooksStore: SearchBooksStore
  ) { }

  setCurrentPageLatestBook(pageNumber) {
    this.latestBooksStore.setCurentPage(pageNumber);
  }
  setCurrentGenreGenreBook(genreId) {
    this.genreBooksStore.setCurrentGenre(genreId);
  }

  setCurrentPageFeatureBook(pageNumber) {
    this.featureBooksStore.setCurentPage(pageNumber);
  }

  selectLoadingAkita() {
    return this.booksQuery.selectLoading();
  }

  getDetailBook(bookId: string) {
    return this.booksGear.getBookById(bookId);
  }

  getGenreBooks() {
    return this.booksHomeGear.getGenreBooks();
  }

  getCategoryBooks(categoryId) {
    return this.booksGear.getCategoryBooks(categoryId);
  }

  getLatestBooks() {
    return this.booksHomeGear.getLatestBooks();
  }

  setCurrentCategory(categoryId) {
    this.latestBooksStore.update({ currentCategoryId: categoryId });
  }

  getAuthorBooks(authors) {
    return this.booksGear.getAuthorBooks(authors, this.authorBooksQuery.getSizePage() + 10);
  }

  getTopBooks() {
    return this.booksGear.getTopBooks(this.topBooksQuery.getSizePage() + 12);
  }

  getGoodBooks() {
    return this.booksHomeGear.getGoodBooks();
  }

  getFeatureBooks(a?) {
    return this.booksHomeGear.getFeatureBooks();
  }

  getFilterBooks(categoryId: string) {
    return this.booksGear.getFilterBooks(this.booksQuery.getCurrentFilter(), categoryId);
  }

  searchBookApi(term: string) {
    if (term === '') {
      return this.booksGear.getCategoryBooks();
    } else {
      return this.booksGear.searhBookByTermApi(term);
    }
  }

  setSearchBook(value) {
    this.searchBooksStore.set(value);
  }

  setSearchBookLoading(value) {
    this.searchBooksStore.setLoading(value);
  }
}
