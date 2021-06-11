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

  gethasNextPage() {
    return this.getValue().hasNextPage
  }

  getSizePage() {
    return this.getValue().sizePage;
  }

  selectTotalBook() {
    return this.select(state => state.totalCount);
  }

  selecthasNextPage() {
    return this.select(state => state.hasNextPage);
  }
}
