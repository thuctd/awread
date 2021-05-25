import { Injectable } from '@angular/core';
import { BooksHomeGear } from '../gears/books-home.gear';
import { BooksGear } from '../gears/books.gear';
import { AuthorBooksQuery } from '../states/author-books';
import { BooksQuery, BooksStore } from '../states/books';
import { CategoryBooksQuery } from '../states/category-books';
import { CollectedQuery } from '../states/collected';
import { ComposedQuery } from '../states/composed';
import { FeatureBooksQuery } from '../states/feature-books';
import { GenreBooksQuery } from '../states/genre-books';
import { GoodBooksQuery } from '../states/good-books';
import { LatestBooksQuery } from '../states/latest-books';
import { TopBooksQuery } from '../states/top-books';


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
    private topBooksQuery: TopBooksQuery,
    private collectedQuery: CollectedQuery,
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

  selectAllBookAkita() {
    return this.booksQuery.selectAll();
  }

  getAllAkita() {
    return this.booksQuery.getAll();
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

  getLatestBooks(cateogoryId: string) {
    return this.booksHomeGear.getLatestBooks(cateogoryId);
  }

  getAuthorBooks(authors) {
    return this.booksGear.getAuthorBooks(authors);
  }

  getTopBooks() {
    return this.booksGear.getTopBooks();
  }

  getGoodBooks() {
    return this.booksHomeGear.getGoodBooks();
  }

  getFeatureBooks() {
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
}
