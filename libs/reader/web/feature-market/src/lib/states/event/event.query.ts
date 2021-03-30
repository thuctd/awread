import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { EventStore, EventState } from './event.store';
// import { EventStore, EventState, EventUIState } from './event.store';

@Injectable({ providedIn: 'root' })
export class EventQuery extends QueryEntity<EventState> {
  eventList$ = this.selectAll();
  // ui: EntityUIQuery<EventUIState>;
  constructor(protected store: EventStore) {
    super(store);
    // this.createUIQuery();
  }

}
