import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Book } from '../../models';

export interface LatestBooksState extends EntityState<Book>, ActiveState {
  hasMore: boolean;
  total: number;
  currentPage: number;
  currentCategoryId: string;
}

const initialState = {
  hasMore: true,
  total: 0,
  currentPage: 1,
  currentCategoryId: '',
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' latest-books', resettable: true, idKey: 'bookId' })
export class LatestBooksStore extends EntityStore<LatestBooksState> {
  // ui: EntityUIStore<LatestBookUIState>;
  constructor() {
    super(initialState);
    // this.createUIStore().setInitialEntityState();
  }

  updatePage(page: { hasMore: boolean; total: number }) {
    this.update(page);
  }

  setCurentPage(pageNumber) {
    this.update({ currentPage: +pageNumber });
  }
}
