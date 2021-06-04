import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Book } from '../../models';
export interface CategoryBooksState extends EntityState<Book>, ActiveState {
  hasMore: boolean;
  sizePage: number;
  total: number;
}

const initialState = {
  hasMore: true,
  sizePage: 0,
  total: 0,
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' category-books', resettable: true, idKey: 'bookId' })
export class CategoryBooksStore extends EntityStore<CategoryBooksState> {
  // ui: EntityUIStore<CategoryBookUIState>;
  constructor() {
    super(initialState);
    // this.createUIStore().setInitialEntityState();
  }

  updatePage(page: { hasMore: boolean, sizePage: number, total: number }) {
    this.update(page);
  }

}
