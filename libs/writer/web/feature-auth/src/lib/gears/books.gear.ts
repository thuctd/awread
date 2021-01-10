import { Router } from '@angular/router';
import { TransformBookDataGear } from './transform-book-data.gear';
import { BooksStore } from './../states/books/books.store';
import { FirebaseFirestoreAddon } from './../addons/firebase-firestore.addon';
import { BooksApi } from './../apis/books.api';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { createBookObject } from '../..';

@Injectable({ providedIn: 'root' })
export class BooksGear {
  constructor(
    private booksApi: BooksApi,
    private booksStore: BooksStore,
    private firebaseFirestoreAddon: FirebaseFirestoreAddon,
    private transformBookDataGear: TransformBookDataGear,
    private router: Router
  ) {}

  updateBookByIdInAkita(id: string, book) {
    return this.booksStore.updateBookById(id, book);
  }

  getAllBooks() {
    return this.booksApi.getAllBooks().pipe(
      tap((res) => {
        if (
          res['data'] &&
          res['data']['allBooks'] &&
          res['data']['allBooks']['nodes'].length
        ) {
          const result = res['data']['allBooks']['nodes'];
          const books = result.map((book) =>
            this.transformBookDataGear.tranformBookData(book)
          );
          this.booksStore.set(books);
        }
      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

  getDetailBook(bookId: string) {
    return this.booksApi.getDetailBook(bookId).pipe(
      tap((res) => console.log('detail books: ', res)),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

  addBook(book) {
    const bookid = this.firebaseFirestoreAddon.createId();
    const bookNew = createBookObject({ ...book, bookid });
    return this.booksApi.createBook(bookNew).pipe(
      tap((res) => {
        console.log('add book res: ', res);
        if (res['data'] && res['data']['createBook']['book']) {
          this.booksStore.addBook(bookNew);
          this.router.navigate(['detail', { bookId: bookid, type: 'edit' }]);
        }
      }),
      catchError((err) => {
        alert('create lỗi rồi nhé babe!');
        return throwError(err);
      })
    );
  }

  editBook(book) {
    return this.booksApi.editBook(book).pipe(
      tap((res) => {
        if (
          res &&
          res['data'] &&
          res['data']['updateBookByBookid']['book']['bookid']
        ) {
          this.updateBookByIdInAkita(book.bookid, book);
        }
      }),
      catchError((err) => {
        alert('update lỗi rồi nhé babe!');
        return throwError(err);
      })
    );
  }

  updateBookStatus(bookId: string, status: string) {
    return this.booksApi.updateBookStatus(bookId, status).pipe(
      tap((res) => console.log('update status books: ', res)),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

  removeBook(bookId: string) {
    return this.booksApi.removeBook(bookId).pipe(
      tap((res) => {
        if (res) {
          this.booksStore.remove(bookId);
        }
      }),
      catchError((err) => {
        alert('Xoa book loi roi nhé babe!');
        return throwError(err);
      })
    );
  }
}
