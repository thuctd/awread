import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TopBooksStore, TopBooksState } from './top-books.store';
// import { TopBooksStore, TopBooksState, TopBooksUIState } from './top-books.store';

@Injectable({ providedIn: 'root' })
export class TopBooksQuery extends QueryEntity<TopBooksState> {
  topBooks$ = this.selectAll();
  // ui: EntityUIQuery<TopBooksUIState>;
  constructor(protected store: TopBooksStore) {
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
