import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Collected } from '../../models';

export interface CollectedState extends EntityState<Collected>, ActiveState { };

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' collected', resettable: true })
export class CollectedStore extends EntityStore<CollectedState> {
  // ui: EntityUIStore<CollectedUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }

}
