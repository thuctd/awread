import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Book } from '../../models';

export interface CollectedState extends EntityState<Book>, ActiveState { };

// export interface CollectedUI {}

// export interface CollectedUIState extends EntityState<CollectedUI>, ActiveState {}


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' collected', resettable: true })
export class CollectedStore extends EntityStore<CollectedState> {
  // ui: EntityUIStore<CollectedUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }

}
