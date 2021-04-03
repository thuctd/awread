import { AuthorBooksQuery } from './../states/author-books/author-books.query';
import { TopBooksQuery } from './../states/top-books/top-books.query';
import { Injectable } from '@angular/core';
import { BooksGear } from '../gears';
import { BooksQuery, BooksStore } from '../states/books';
import { CategoryBooksQuery } from '../states/category-books';
import { FeatureBooksQuery } from '../states/feature-books';
import { GenreBooksQuery } from '../states/genre-books';
import { GoodBooksQuery } from '../states/good-books';
import { LatestBooksQuery } from '../states/latest-books';

@Injectable({ providedIn: 'root' })
export class BooksFacade {
  bookList$ = this.booksQuery.selectAll();
  topBookList$ = this.topBooksQuery.selectAll();
  goodBookList$ = this.goodBooksQuery.selectAll();
  genreBookList$ = this.genreBooksQuery.selectAll();
  authorBookList$ = this.authorBooksQuery.selectAll();
  latestBookList$ = this.latestBooksQuery.selectAll();
  featureBookList$ = this.featureBooksQuery.selectAll();
  categoryBookList$ = this.categoryBooksQuery.selectAll();

  constructor(
    private booksGear: BooksGear,
    private booksStore: BooksStore,
    private booksQuery: BooksQuery,
    private topBooksQuery: TopBooksQuery,
    private goodBooksQuery: GoodBooksQuery,
    private genreBooksQuery: GenreBooksQuery,
    private authorBooksQuery: AuthorBooksQuery,
    private latestBooksQuery: LatestBooksQuery,
    private featureBooksQuery: FeatureBooksQuery,
    private categoryBooksQuery: CategoryBooksQuery
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

  getGenreBooks(genreId: string) {
    return this.booksGear.getGenreBooks(genreId);
  }

  getCategoryBooks(categoryId: string) {
    return this.booksGear.getCategoryBooks(categoryId);
  }

  getLatestBooks() {
    return this.booksGear.getLatestBooks();
  }

  getAuthorBooks(authorId: string) {
    console.log(authorId);
    return this.booksGear.getAuthorBooks(authorId);
  }

  getTopBooks() {
    return this.booksGear.getTopBooks();
  }

  getGoodBooks() {
    return this.booksGear.getGoodBooks();
  }

  getFeatureBooks() {
    return this.booksGear.getFeatureBooks();
  }

  getDetailBook(bookId: string) {
    return this.booksGear.getBookById(bookId);
  }

}
