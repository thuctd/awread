import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ComposedStore, ComposedState } from './composed.store';
// import { ComposedStore, ComposedState, ComposedUIState } from './composed.store';

@Injectable({ providedIn: 'root' })
export class ComposedQuery extends QueryEntity<ComposedState> {
  // ui: EntityUIQuery<ComposedUIState>;
  constructor(protected store: ComposedStore) {
    super(store);
    // this.createUIQuery();
  }

}
