import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { CreationsStore, CreationState } from './creations.store';

@Injectable({ providedIn: 'root' })
export class CreationsQuery extends Query<CreationState> {

  constructor(protected store: CreationsStore) {
    super(store);
  }

}
