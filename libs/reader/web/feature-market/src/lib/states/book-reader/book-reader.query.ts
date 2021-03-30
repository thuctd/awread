import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { BookReaderStore, BookReaderState } from './book-reader.store';
// import { BookReaderStore, BookReaderState, BookReaderUIState } from './book-reader.store';

@Injectable({ providedIn: 'root' })
export class BookReaderQuery extends QueryEntity<BookReaderState> {
  // ui: EntityUIQuery<BookReaderUIState>;
  constructor(protected store: BookReaderStore) {
    super(store);
    // this.createUIQuery();
  }

}
