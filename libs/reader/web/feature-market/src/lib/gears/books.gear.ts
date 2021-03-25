import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { BooksApi } from '../apis';
import { Book } from '../models';
import { BooksStore } from '../states/books';

@Injectable({ providedIn: 'root' })
export class BooksGear {
  baseUrl = 'http://localhost:3000/books';

  constructor(
    private http: HttpClient,
    private booksStore: BooksStore,
    private booksApi: BooksApi
  ) { }

  //TODO: Em gọi api kiểu này sao không được anh Hiệp nhỉ>>> -.-
  // NOTE: không gọi data ở đây, mà phải gọi từ API
  getAllBooks() {
    return this.booksApi.getAllBooks().pipe(
      tap((books) => {
        console.log('get books: ', books);
        this.booksStore.set(books);
      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

  getBookById(bookId: string) {
    return this.booksApi.getBookById(bookId).pipe(
      tap((book) => console.log('detail books: ', book)),
      tap((book) => this.booksStore.add(book)), // book lấy về thì thêm vào store
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

  getBooksByGenresId(genreId: string) {
    return this.booksApi.getBooksByGenresId(genreId).pipe(
      tap((books) => {
        this.booksStore.set(books);
      })
    );
  }
}
