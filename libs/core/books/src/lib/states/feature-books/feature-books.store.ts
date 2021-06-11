import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Book } from '../../models';

export interface FeatureBooksState extends EntityState<Book>, ActiveState {
  hasNextPage: boolean;
  totalCount: number;
  sizePage: number;
  currentPage: number;
}

const initialState = {
  hasNextPage: true,
  totalCount: 0,
  sizePage: 0,
  currentPage: 0
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
}
