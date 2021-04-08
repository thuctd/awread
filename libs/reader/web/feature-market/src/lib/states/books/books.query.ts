import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { BooksStore, BooksState } from './books.store';
// import { BooksStore, BooksState, BooksUIState } from './books.store';

@Injectable({ providedIn: 'root' })
export class BooksQuery extends QueryEntity<BooksState> {
  bookList$ = this.selectAll();
  isLoading$ = this.selectLoading();
  filtersChange$ = this.select(state => state.ui.filters);
  // ui: EntityUIQuery<BooksUIState>;
  constructor(protected store: BooksStore) {
    super(store);
    // this.createUIQuery();
  }

  getBookById(id: string) {
    return this.getEntity(id);
  }
}
