import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { BookDetailStore, BookDetailState } from './book-detail.store';

@Injectable({ providedIn: 'root' })
export class BookDetailQuery extends Query<BookDetailState> {

  constructor(protected store: BookDetailStore) {
    super(store);
  }

}
