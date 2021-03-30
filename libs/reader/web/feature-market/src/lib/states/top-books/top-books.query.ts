import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TopBooksStore, TopBooksState } from './top-books.store';
// import { TopBooksStore, TopBooksState, TopBooksUIState } from './top-books.store';

@Injectable({ providedIn: 'root' })
export class TopBooksQuery extends QueryEntity<TopBooksState> {
  topBookList$ = this.selectAll();
  // ui: EntityUIQuery<TopBooksUIState>;
  constructor(protected store: TopBooksStore) {
    super(store);
    // this.createUIQuery();
  }

}
