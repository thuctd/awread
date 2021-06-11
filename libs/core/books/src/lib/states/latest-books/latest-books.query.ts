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



  getSizePage() {
    return this.getValue().sizePage;
  }

  selectTotalBook() {
    return this.select(state => state.totalCount);
  }

  getHasNextPage() {
    return this.getValue().pageInfo.hasNextPage;
  }

  selectHasNextPage() {
    return this.select(state => state.pageInfo.hasNextPage);
  }

  selectEndCursor() {
    return this.select(state => state.pageInfo.endCursor);
  }

  getEndCursor() {
    return this.getValue().pageInfo.endCursor;
  }
}
