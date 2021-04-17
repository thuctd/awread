import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Book } from '../../models';

export interface ComposedState extends EntityState<Book>, ActiveState { };

// export interface ComposedUI {}

// export interface ComposedUIState extends EntityState<ComposedUI>, ActiveState {}


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' composed', resettable: true })
export class ComposedStore extends EntityStore<ComposedState> {
  // ui: EntityUIStore<ComposedUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }

}
