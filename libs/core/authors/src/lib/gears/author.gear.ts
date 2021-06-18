import { Injectable } from '@angular/core';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { AuthorApi } from '../apis/author.api';
import { AuthorsStore } from '../states/authors';
import { Router } from '@angular/router';
@Injectable({ providedIn: 'root' })
export class AuthorGear {

  constructor(private authorApi: AuthorApi, private authorStore: AuthorsStore) { }

  getAuthors() {
    return this.authorApi.getAuthors().pipe(
      tap((res) => { }),
    );
  }

  getDetailAuthor(userId: string) {
    if (userId.length == 36) {
      return this.authorApi.getDetailAuthor(userId)
        .pipe(
          mergeMap((res) => {
            if (res.errors) {
              return throwError(res.errors);
            } else {
              return of({
                ...res?.['data']?.['userByUserId'],
                ...res?.['data']?.['personalByUserId'],
                userId
              })
            }
          })
        )
    } else {
      return throwError('not a valid userId');
    }


  }
}
