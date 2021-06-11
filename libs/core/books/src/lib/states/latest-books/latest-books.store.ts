import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Book } from '../../models';

export interface LatestBooksState extends EntityState<Book>, ActiveState {
  hasNextPage: boolean;
  totalCount: number;
  sizePage: number;
  currentPage: number;
  currentCategoryId: string;
}

const initialState = {
  hasNextPage: true,
  totalCount: 0,
  sizePage: 0,
  currentPage: 0,
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

  updatePage(page: { hasNextPage: boolean; totalCount: number, sizePage: number }) {
    this.update(page);
  }

  setCurentPage(pageNumber) {
    this.update({ currentPage: +pageNumber });
  }
}
