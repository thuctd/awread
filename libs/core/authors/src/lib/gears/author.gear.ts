import { AuthorStore } from './../states/author/author.store';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Author, Book } from '../models';
import { AuthorApi } from '../apis/author.api';

@Injectable({ providedIn: 'root' })
export class AuthorGear {

  constructor(private authorApi: AuthorApi, private authorStore: AuthorStore) { }

  getAuthors() {
    return this.authorApi.getAuthors().pipe(
      tap((res) => { }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

  getDetailAuthor(authorId: string) {
    return this.authorApi.getDetailAuthor(authorId).pipe(
      tap((res) => console.log('author detail: ', res)),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }
}
