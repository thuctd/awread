import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { GoodBooksStore } from './good-books.store';

@Injectable({ providedIn: 'root' })
export class GoodBooksService {

  constructor(
    private goodBooksStore: GoodBooksStore,
  ) {
  }

  get() {
    return of([]).pipe(tap(entities => this.goodBooksStore.update(entities)));
  }

}
