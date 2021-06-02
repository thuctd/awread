import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Book } from '../../models';

export interface TopBooksState extends EntityState<Book>, ActiveState { 
  hasMore: boolean;
  page: number;
}

const initialState = {
  hasMore: true,
  page: 1
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' top-books', resettable: true, idKey: 'bookId' })
export class TopBooksStore extends EntityStore<TopBooksState> {
  // ui: EntityUIStore<TopBookUIState>;
  constructor() {
    super(initialState);
    // this.createUIStore().setInitialEntityState();
  }

    updatePage(page: { hasMore: boolean, page: number }) {
    this.update(page);
  }
}
