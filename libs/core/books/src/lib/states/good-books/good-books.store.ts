import { PageInfo } from '@awread/global/tools';
import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Book } from '../../models';

export interface GoodBooksState extends EntityState<Book>, ActiveState {
  pageInfo: PageInfo;
}

const initialState = {
  pageInfo: {
    endCursor: undefined,
    hasNextPage: true,
    hasPreviousPage: undefined,
    startCursor: undefined,
  }
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' good-books', resettable: true, idKey: 'bookId' })
export class GoodBooksStore extends EntityStore<GoodBooksState> {
  // ui: EntityUIStore<GoodBookUIState>;
  constructor() {
    super(initialState);
    // this.createUIStore().setInitialEntityState();
  }

  updatePage(page: { hasNextPage: boolean, totalCount: number, sizePage: number }) {
    this.update(page);
  }

  setCursor(cursor) {
    this.update({ cursor });
  }
}
