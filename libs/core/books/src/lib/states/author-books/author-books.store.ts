import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Book } from '../../models';
export interface AuthorBooksState extends EntityState<Book>, ActiveState {
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
@StoreConfig({ name: ' author-books', resettable: true, idKey: 'bookId' })
export class AuthorBooksStore extends EntityStore<AuthorBooksState> {
  // ui: EntityUIStore<AuthorBookUIState>;
  constructor() {
    super(initialState);
    // this.createUIStore().setInitialEntityState();
  }

  updatePage(page: { hasNextPage: boolean, sizePage: number, totalCount: number }) {
    this.update(page);
  }

}
