import { Injectable } from '@angular/core';
import { BooksGear } from '../gears';
import { BooksQuery, BooksStore } from '../states/books';

@Injectable({ providedIn: 'root' })
export class BooksFacade {
  bookList$ = this.booksQuery.selectAll();

  constructor(
    private booksGear: BooksGear,
    private booksStore: BooksStore,
    private booksQuery: BooksQuery
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
    return this.booksGear.getGenreBooks(categoryId);
  }

  getLatestBooks() {
    return this.booksGear.getLatestBooks();
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
