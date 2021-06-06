import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface CurrentCreationState {
  key: string;
}

export function createInitialState(): CurrentCreationState {
  return {
    key: 'value'
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'current-creation', resettable: true })
export class CurrentCreationStore extends Store<CurrentCreationState> {

  constructor() {
    super(createInitialState());
  }

}
