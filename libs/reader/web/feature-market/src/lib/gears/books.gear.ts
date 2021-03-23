import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { BooksApi } from '../apis';

@Injectable({ providedIn: 'root' })
export class BooksGear {

  constructor(private booksApi: BooksApi,
  ) {
  }

  getAllBooks() {
    return this.booksApi.getAllBooks().pipe(
      tap((res) => {
        console.log(res);
      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

}
