import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Book } from '../../models';

export interface BooksState extends EntityState<Book>, ActiveState {
  ui: {
    filters: {
      typeBook: string;
      category: string;
      criteria: string;
      status: string;
      date: string;
    }
  }
};

const initialState = {
  ui: {
    filters: {
      typeBook: '',
      category: '',
      criteria: '',
      status: '',
      date: ''
    }
  }
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' books', resettable: true, idKey: 'bookId' })
export class BooksStore extends EntityStore<BooksState> {
  // ui: EntityUIStore<BookUIState>;
  constructor() {
    super(initialState);
    // this.createUIStore().setInitialEntityState();
  }

}
