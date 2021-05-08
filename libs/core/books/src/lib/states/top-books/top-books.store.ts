import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Book } from '../../models';

export interface TopBooksState extends EntityState<Book>, ActiveState { };

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' top-books', resettable: true, idKey: 'bookId' })
export class TopBooksStore extends EntityStore<TopBooksState> {
  // ui: EntityUIStore<TopBookUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }

}
