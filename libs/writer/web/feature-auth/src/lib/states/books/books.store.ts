import { Injectable } from '@angular/core';
import {
  EntityState,
  EntityStore,
  StoreConfig,
  ActiveState,
} from '@datorama/akita';
import { Book } from '../../..';

export enum VISIBILITY_FILTER {
  SHOW_ALL = 'SHOW_ALL',
}

export interface BooksState extends EntityState<Book>, ActiveState {
  ui: {
    filter: VISIBILITY_FILTER;
  };
}
const initialState = {
  ui: {
    filter: VISIBILITY_FILTER.SHOW_ALL,
  },
};

// export interface BookUI {}

// export interface BooksUIState extends EntityState<BookUI>, ActiveState {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'books', resettable: true, idKey: 'bookid' })
export class BooksStore extends EntityStore<BooksState> {
  // ui: EntityUIStore<BookUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }
}
