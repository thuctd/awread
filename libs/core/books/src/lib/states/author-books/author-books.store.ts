import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Book } from '../../models';
export interface AuthorBooksState extends EntityState<Book>, ActiveState {
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
@StoreConfig({ name: ' author-books', resettable: true, idKey: 'bookId' })
export class AuthorBooksStore extends EntityStore<AuthorBooksState> {
  // ui: EntityUIStore<AuthorBookUIState>;
  constructor() {
    super(initialState);
    // this.createUIStore().setInitialEntityState();
  }

  updatePage(page: { hasMore: boolean, sizePage: number, total: number }) {
    this.update(page);
  }

}
