import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { BooksHomeApi } from '../apis';

@Injectable({ providedIn: 'root' })
export class BooksHomeGear {

  constructor(
    private booksHomeApi: BooksHomeApi
  ) { }

  getGoodBooks() {
    return this.booksHomeApi.getGoodBooks().pipe(
      map((res) => {

      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

  getFeatureBooks() {
    return this.booksHomeApi.getFeatureBooks().pipe(
      map((res) => {

      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

  getLatestBooks() {
    return this.booksHomeApi.getLatestBooks().pipe(
      map((res) => {

      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

  getTopBooks() {
    return this.booksHomeApi.getTopBooks().pipe(
      map((books) => {

      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

}
