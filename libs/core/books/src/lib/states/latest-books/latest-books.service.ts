import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { LatestBooksStore } from './latest-books.store';

@Injectable({ providedIn: 'root' })
export class LatestBooksService {

  constructor(
    private latestBooksStore: LatestBooksStore,
  ) {
  }

  get() {
    return of([]).pipe(tap(entities => this.latestBooksStore.update(entities)));
  }

}
