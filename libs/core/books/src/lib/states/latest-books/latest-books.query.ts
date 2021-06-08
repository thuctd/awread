import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { LatestBooksStore, LatestBooksState } from './latest-books.store';
// import { LatestBooksStore, LatestBooksState, LatestBooksUIState } from './latest-books.store';

@Injectable({ providedIn: 'root' })
export class LatestBooksQuery extends QueryEntity<LatestBooksState> {
  latestBooks$ = this.selectAll();
  // ui: EntityUIQuery<LatestBooksUIState>;
  constructor(protected store: LatestBooksStore) {
    super(store);
    // this.createUIQuery();
  }

  getHasMore() {
    return this.getValue().hasMore
  }

  selectTotalBook() {
    return this.select(state => state.total);
  }

  selectHasMore() {
    return this.select(state => state.hasMore);
  }
}
