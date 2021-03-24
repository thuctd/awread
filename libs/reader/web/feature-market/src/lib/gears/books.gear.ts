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

  constructor(private http: HttpClient, private booksStore: BooksStore) { }

  //TODO: Em gọi api kiểu này sao không được anh Hiệp nhỉ>>> -.-
  getAllBooks() {
    return this.http.get<Book[]>(`${this.baseUrl}`).pipe(
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
    return this.http.get<Book>(`${this.baseUrl}/${bookId}`).pipe(
      tap((book) => console.log('detail books: ', book)),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }
}
