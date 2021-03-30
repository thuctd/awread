import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Event } from '../../models';

export interface EventState extends EntityState<Event>, ActiveState { };

// export interface EventUI {}

// export interface EventUIState extends EntityState<EventUI>, ActiveState {}


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'event', resettable: true })
export class EventStore extends EntityStore<EventState> {
  // ui: EntityUIStore<EventUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }

}
