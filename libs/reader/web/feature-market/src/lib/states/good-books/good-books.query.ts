import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { GoodBooksStore, GoodBooksState } from './good-books.store';
// import { GoodBooksStore, GoodBooksState, GoodBooksUIState } from './good-books.store';

@Injectable({ providedIn: 'root' })
export class GoodBooksQuery extends QueryEntity<GoodBooksState> {
  goodBookList$ = this.selectAll();
  // ui: EntityUIQuery<GoodBooksUIState>;
  constructor(protected store: GoodBooksStore) {
    super(store);
    // this.createUIQuery();
  }

}
