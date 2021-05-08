import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Book } from '../../models';

export interface AuthorBooksState extends EntityState<Book>, ActiveState { };

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' author-books', resettable: true, idKey: 'bookId' })
export class AuthorBooksStore extends EntityStore<AuthorBooksState> {
  // ui: EntityUIStore<AuthorBookUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }

}
