import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Book } from '../../models';

export interface BooksState extends EntityState<Book>, ActiveState {
  ui: {
    filters: {
      typeBook: string;
      genres: string[];
      criteria: string;
      status: string;
      postingDate: string;
    }
  }
};

const initialState = {
  ui: {
    filters: {
      typeBook: '',
      genres: [''],
      criteria: '',
      status: '',
      postingDate: ''
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
