import { Injectable } from '@angular/core';
import { PageInfo } from '@awread/global/tools';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Book } from '../../models';

export interface LatestBooksState extends EntityState<Book>, ActiveState {
  pageInfo: PageInfo;
  currentCategoryId: string | undefined;
}

const initialState = {
  currentCategoryId: undefined,
  currentPage: 1,
  pageInfo: {
    endCursor: undefined,
    hasNextPage: true,
    hasPreviousPage: undefined,
    startCursor: undefined,
  }
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' latest-books', resettable: true, idKey: 'bookId' })
export class LatestBooksStore extends EntityStore<LatestBooksState> {
  // ui: EntityUIStore<LatestBookUIState>;
  constructor() {
    super(initialState);
    // this.createUIStore().setInitialEntityState();
  }

  updatePage(page: { hasNextPage: boolean; totalCount: number, sizePage: number }) {
    this.update(page);
  }

  setCurentPage(pageNumber) {
    this.update({ currentPage: +pageNumber });
  }

  setCursor(cursor) {
    this.update({ cursor });
  }
}
