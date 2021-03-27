import { Injectable } from '@angular/core';
import { EventGear } from '../gears';
import { EventQuery } from '../states/event';

@Injectable({ providedIn: 'root' })
export class EventFacade {
  eventList$ = this.eventQuery.selectAll();

  constructor(
    private eventGear: EventGear,
    private eventQuery: EventQuery
  ) {
  }

  selectAllEventAkita() {
    return this.eventQuery.selectAll();
  }

  getAllEvents() {
    return this.eventGear.getAllEvents();
  }

}
