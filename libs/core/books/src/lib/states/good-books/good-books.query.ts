import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { GoodBooksStore, GoodBooksState } from './good-books.store';
// import { GoodBooksStore, GoodBooksState, GoodBooksUIState } from './good-books.store';

@Injectable({ providedIn: 'root' })
export class GoodBooksQuery extends QueryEntity<GoodBooksState> {
  goodBooks$ = this.selectAll();
  // ui: EntityUIQuery<GoodBooksUIState>;
  constructor(protected store: GoodBooksStore) {
    super(store);
    // this.createUIQuery();
  }

  getHasMore() {
    return this.getValue().hasMore
  }

  getSizePage() {
    return this.getValue().sizePage;
  }

  selectTotalBook() {
    return this.select(state => state.total);
  }

  selectHasMore() {
    return this.select(state => state.hasMore);
  }
}
