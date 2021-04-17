import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { TopBooksStore } from './top-books.store';

@Injectable({ providedIn: 'root' })
export class TopBooksService {

  constructor(
    private topBooksStore: TopBooksStore,
  ) {
  }

  get() {
    return of([]).pipe(tap(entities => this.topBooksStore.update(entities)));
  }

}
