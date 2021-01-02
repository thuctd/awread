import { FirebaseFirestoreAddon } from './../addons/firebase-firestore.addon';
import { BooksApi } from './../apis/books.api';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BooksGear {
  constructor(
    private booksApi: BooksApi,
    private firebaseFirestoreAddon: FirebaseFirestoreAddon
  ) {}

  getAllBooks() {
    return this.booksApi.getAllBooks();
  }

  addBook(book) {
    const bookid = this.firebaseFirestoreAddon.createId();
    return this.booksApi.createBook({ ...book, bookid });
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
