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

  selectLoadingAkiata() {
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

}
