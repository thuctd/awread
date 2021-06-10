import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Book } from '../../models';

export interface LatestBooksState extends EntityState<Book>, ActiveState { 
  hasMore: boolean;
  total: number;
}

const initialState = {
  hasMore: true,
  total: 0
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' latest-books', resettable: true, idKey: 'bookId' })
export class LatestBooksStore extends EntityStore<LatestBooksState> {
  // ui: EntityUIStore<LatestBookUIState>;
  constructor() {
    super(initialState);
    // this.createUIStore().setInitialEntityState();
  }

  updatePage(page: { hasMore: boolean, total: number }) {
    this.update(page);
  }
}
