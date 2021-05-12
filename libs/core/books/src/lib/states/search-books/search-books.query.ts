import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { SearchBooksStore, SearchBooksState } from './search-books.store';
// import { SearchBooksStore, SearchBooksState, SearchBooksUIState } from './search-books.store';

@Injectable({ providedIn: 'root' })
export class SearchBooksQuery extends QueryEntity<SearchBooksState> {
  // ui: EntityUIQuery<SearchBooksUIState>;
  constructor(protected store: SearchBooksStore) {
    super(store);
    // this.createUIQuery();
  }

}
