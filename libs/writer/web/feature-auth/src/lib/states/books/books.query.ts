import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { BooksStore, BooksState } from './books.store';
// import { BooksStore, BooksState, BooksUIState } from './books.store';

@Injectable({ providedIn: 'root' })
export class BooksQuery extends QueryEntity<BooksState> {
  // ui: EntityUIQuery<BooksUIState>;
  bookList$ = this.selectAll();
  constructor(protected store: BooksStore) {
    super(store);
    // this.createUIQuery();
  }
}
