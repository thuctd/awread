import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { BookDetailStore, BookDetailState } from './book-detail.store';
// import { BookDetailStore, BookDetailState, BookDetailUIState } from './book-detail.store';

@Injectable({ providedIn: 'root' })
export class BookDetailQuery extends QueryEntity<BookDetailState> {
  // ui: EntityUIQuery<BookDetailUIState>;
  constructor(protected store: BookDetailStore) {
    super(store);
    // this.createUIQuery();
  }

}
