import { Injectable } from '@angular/core';
import { log, pageInfoToAkita } from '@awread/global/tools';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ListBooksApi } from '../apis';
import { LatestBooksQuery, LatestBooksStore } from '../states/latest-books';

@Injectable({ providedIn: 'root' })
export class ListBooksGear {

  constructor(
    private listBooksApi: ListBooksApi,
    private latestBooksStore: LatestBooksStore,
    private latestBooksQuery: LatestBooksQuery,
  ) {
  }

  getLatestBookByCursor(action, first = 10) {
    return of(this.latestBooksQuery.getEndCursor())
      .pipe(
        pageInfoToAkita(this.latestBooksStore, (cursor) => this.listBooksApi.getLatestBookByCursor(cursor, first), action)
      )
  }
}
