import { BooksApi } from './../apis/books.api';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BooksGear {
  constructor(private booksApi: BooksApi) {}

  getAllBooks() {
    return this.booksApi.getAllBooks();
  }

  addBook(book) {
    return this.booksApi.addBook(book);
  }

  editBook(book) {
    return this.booksApi.editBook(book);
  }

  updateBookStatus(bookId: string, status: string) {
    return this.booksApi.updateBookStatus(bookId, status);
  }

  removeBook(bookId: string) {
    return this.booksApi.removeBook(bookId);
  }
}
