import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Composed } from '../../models';

export interface ComposedState extends EntityState<Composed>, ActiveState { };

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' composed', resettable: true, idKey: 'bookId' })
export class ComposedStore extends EntityStore<ComposedState> {
  // ui: EntityUIStore<ComposedUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }

}
