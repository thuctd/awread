import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SearchBooksStore } from './search-books.store';

@Injectable({ providedIn: 'root' })
export class SearchBooksService {

  constructor(
    private searchBooksStore: SearchBooksStore,
  ) {
  }

  get() {
    return of([]).pipe(tap(entities => this.searchBooksStore.update(entities)));
  }

}
