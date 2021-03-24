import { HttpClient } from '@angular/common/http';
import { AuthorStore } from './../states/author/author.store';
import { AuthorApi } from './../apis/author.api';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Author, Book } from '../models';

@Injectable({ providedIn: 'root' })
export class AuthorGear {
  baseUrl = 'http://localhost:3000/author';

  constructor(private http: HttpClient, private authorStore: AuthorStore) { }

  getAuthorById(authorId: string) {
    return this.http.get<Author>(`${this.baseUrl}/${authorId}`).pipe(
      tap((res) => console.log('detail author: ', res)),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

  getBooksByAuthorId(authorId: string) {
    return this.http.get<Book[]>(`${this.baseUrl}/${authorId}/books`).pipe(
      tap((res) => console.log('author books: ', res)),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }
}
