import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { CurrentCreationStore, CurrentCreationState } from './current-creation.store';

@Injectable({ providedIn: 'root' })
export class CurrentCreationQuery extends Query<CurrentCreationState> {

  constructor(protected store: CurrentCreationStore) {
    super(store);
  }

}
