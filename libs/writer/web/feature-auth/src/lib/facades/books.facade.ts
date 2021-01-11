import { FirestoreGear } from './../gears/firestore.gear';
// TODO: ../states/books thoi
import { BooksQuery } from './../states/books/books.query';
import { tap, catchError, map } from 'rxjs/operators';
// TODO: ../states/books thoi
import { BooksStore } from './../states/books/books.store';
// TODO: ../gears thoi 
import { BooksGear } from './../gears/books.gear';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BooksFacade {
  bookList$ = this.booksQuery.selectAll();
  constructor(
    private booksGear: BooksGear,
    private booksStore: BooksStore,
    private booksQuery: BooksQuery,
    private firestoreGear: FirestoreGear
  ) { }

  setBookIdActiveAkita(bookid: string) {
    return this.booksStore.setActive(bookid);
  }

  getBookIdActiveAkita() {
    return this.booksQuery.getActiveId();
  }

  // selectEntityChapterBookById(id: string): any {
  //   return this.booksQuery.selectEnityChapterBookById(id);
  // }

  getBookByIdInAkita(id: string) {
    return this.booksQuery.getBookById(id);
  }

  selectEntityBook(id: string) {
    return this.booksQuery.selectEntity(id);
  }

  getAllBooks() {
    return this.booksGear.getAllBooks();
  }
  // setBooksInAkita() {
  //   return this.getAllBooks().pipe(
  //     tap((res) => {
  //       if (
  //         res['data'] &&
  //         res['data']['allBooks'] &&
  //         res['data']['allBooks']['nodes'].length
  //       ) {
  //         const result = res['data']['allBooks']['nodes'];
  //         const books = result.map((book) => this.tranformBookData(book));
  //         this.booksStore.set(books);
  //       }
  //     })
  //   );
  // }

  getDetailBook(bookId: string) {
    return this.booksGear.getDetailBook(bookId);
  }

  addBook(book) {
    return this.booksGear.addBook(book).pipe();
  }
  editBook(book) {
    return this.booksGear.editBook(book).pipe();
  }

  updateBookStatus(bookId: string, status: string) {
    return this.booksGear.updateBookStatus(bookId, status);
  }

  removeBook(bookId: string) {
    return this.booksGear.removeBook(bookId).pipe();
  }
}
