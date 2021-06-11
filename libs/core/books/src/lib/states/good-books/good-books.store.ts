import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Book } from '../../models';

export interface GoodBooksState extends EntityState<Book>, ActiveState {
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
@StoreConfig({ name: ' good-books', resettable: true, idKey: 'bookId' })
export class GoodBooksStore extends EntityStore<GoodBooksState> {
  // ui: EntityUIStore<GoodBookUIState>;
  constructor() {
    super(initialState);
    // this.createUIStore().setInitialEntityState();
  }

  updatePage(page: { hasNextPage: boolean, sizePage: number, totalCount: number }) {
    this.update(page);
  }

}
