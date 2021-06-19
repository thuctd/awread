import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Creation } from '../../models';

export interface CreationsState extends EntityState<Creation>, ActiveState {
  ui: {
    filters: {
      categoryId: string;
      completed: string;
    },
    searchTerm: string;
  }
}
const initialState = {
  ui: {
    filters: {
      categoryId: '',
      completed: '',
    },
    searchTerm: '',
  }
};

// export interface CreationUI {}

// export interface CreationsUIState extends EntityState<CreationUI>, ActiveState {}


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' creations', resettable: true, idKey: 'bookId' })
export class CreationsStore extends EntityStore<CreationsState> {
  // ui: EntityUIStore<CreationUIState>;
  constructor() {
    super(initialState);
    // this.createUIStore().setInitialEntityState();
  }

}
