import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Creation } from '../../models';

export enum VISIBILITY_FILTER {
  SHOW_ALL = 'SHOW_ALL'
}

export interface CreationsState extends EntityState<Creation>, ActiveState {
  ui: {
    filter: VISIBILITY_FILTER;
  };
}
const initialState = {
  ui: {
    filter: VISIBILITY_FILTER.SHOW_ALL
  }
};

// export interface CreationUI {}

// export interface CreationsUIState extends EntityState<CreationUI>, ActiveState {}


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' creations', resettable: true, idKey: 'bookId' })
export class CreationsStore extends EntityStore<CreationsState> {
  // ui: EntityUIStore<CreationUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }

}
