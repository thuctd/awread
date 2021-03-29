import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Book } from '../../models';

export interface LatestBooksState extends EntityState<Book>, ActiveState { };

// export interface LatestBookUI {}

// export interface LatestBooksUIState extends EntityState<LatestBookUI>, ActiveState {}


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' latest-books', resettable: true })
export class LatestBooksStore extends EntityStore<LatestBooksState> {
  // ui: EntityUIStore<LatestBookUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }

}
