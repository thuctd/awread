import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Book } from '../../models';

export interface BooksState extends EntityState<Book>, ActiveState {
  ui: {
    filters: {
      typeBook: string;
      category: string;
      genre: string;
      status: string;
      publishedAt: string;
    }
  }
};

const initialState = {
  ui: {
    filters: {
      typeBook: '',
      category: '',
      genre: '',
      status: '',
      publishedAt: ''
    }
  }
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' books', resettable: true })
export class BooksStore extends EntityStore<BooksState> {
  // ui: EntityUIStore<BookUIState>;
  constructor() {
    super(initialState);
    // this.createUIStore().setInitialEntityState();
  }

}
