import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CreationsStore, CreationsState } from './creations.store';
// import { CreationsStore, CreationsState, CreationsUIState } from './creations.store';

@Injectable({ providedIn: 'root' })
export class CreationsQuery extends QueryEntity<CreationsState> {
  // ui: EntityUIQuery<CreationsUIState>;
  constructor(protected store: CreationsStore) {
    super(store);
    // this.createUIQuery();
  }

}
