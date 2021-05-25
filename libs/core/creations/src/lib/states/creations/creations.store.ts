import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface CreationsState {
  key: string;
}

export function createInitialState(): CreationsState {
  return {
    key: 'value'
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'creations', resettable: true })
export class CreationsStore extends Store<CreationsState> {

  constructor() {
    super(createInitialState());
  }

}
