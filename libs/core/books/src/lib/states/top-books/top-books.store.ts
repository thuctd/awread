import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Book } from '../../models';

export interface TopBooksState extends EntityState<Book>, ActiveState {
  hasNextPage: boolean;
  sizePage: number;
  totalCount: number;
}

const initialState = {
  hasNextPage: true,
  sizePage: 0,
  totalCount: 0,
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' top-books', resettable: true, idKey: 'bookId' })
export class TopBooksStore extends EntityStore<TopBooksState> {
  // ui: EntityUIStore<TopBookUIState>;
  constructor() {
    super(initialState);
    // this.createUIStore().setInitialEntityState();
  }

  updatePage(page: { hasNextPage: boolean, sizePage: number, totalCount: number }) {
    this.update(page);
  }
}
