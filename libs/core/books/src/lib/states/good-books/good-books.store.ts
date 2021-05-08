import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Book } from '../../models';

export interface GoodBooksState extends EntityState<Book>, ActiveState { };

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' good-books', resettable: true, idKey: 'bookId' })
export class GoodBooksStore extends EntityStore<GoodBooksState> {
  // ui: EntityUIStore<GoodBookUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }

}
