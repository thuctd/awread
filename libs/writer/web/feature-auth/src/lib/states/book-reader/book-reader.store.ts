import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { BookReader } from '../../models';

export enum VISIBILITY_FILTER {
  SHOW_ALL = 'SHOW_ALL',
}

export interface BookReaderState extends EntityState<BookReader>, ActiveState {
  ui: {
    filter: VISIBILITY_FILTER;
  };
}

// export interface BookReaderUI {}

// export interface BookReaderUIState extends EntityState<BookReaderUI>, ActiveState {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'book-reader', resettable: true, idKey: 'bookid' })
export class BookReaderStore extends EntityStore<BookReaderState> {
  // ui: EntityUIStore<BookReaderUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }
}
