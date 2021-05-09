import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Book } from '../../models';

export interface LatestBooksState extends EntityState<Book>, ActiveState { };

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' latest-books', resettable: true, idKey: 'bookId' })
export class LatestBooksStore extends EntityStore<LatestBooksState> {
  // ui: EntityUIStore<LatestBookUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }

}
