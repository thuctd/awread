import { PageInfo } from '@awread/global/tools';
import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Book } from '../../models';

export interface FeatureBooksState extends EntityState<Book>, ActiveState {
  pageInfo: PageInfo;
  currentPage: number;
}

const initialState = {
  currentPage: 1,
  pageInfo: {
    endCursor: undefined,
    hasNextPage: true,
    hasPreviousPage: undefined,
    startCursor: undefined,
  }
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' feature-books', resettable: true, idKey: 'bookId' })
export class FeatureBooksStore extends EntityStore<FeatureBooksState> {
  // ui: EntityUIStore<FeatureBookUIState>;
  constructor() {
    super(initialState);
    // this.createUIStore().setInitialEntityState();
  }

  updatePage(page: { hasNextPage: boolean, totalCount: number, sizePage: number }) {
    this.update(page);
  }

  setCurentPage(pageNumber) {
    this.update({ currentPage: +pageNumber });
  }

  setCursor(cursor) {
    this.update({ cursor });
  }
}
