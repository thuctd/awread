import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CollectedStore, CollectedState } from './collected.store';
// import { CollectedStore, CollectedState, CollectedUIState } from './collected.store';

@Injectable({ providedIn: 'root' })
export class CollectedQuery extends QueryEntity<CollectedState> {
  // ui: EntityUIQuery<CollectedUIState>;
  constructor(protected store: CollectedStore) {
    super(store);
    // this.createUIQuery();
  }

}
