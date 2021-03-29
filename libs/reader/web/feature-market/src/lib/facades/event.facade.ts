import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { EventGear } from '../gears';
import { EventQuery } from '../states/event';

@Injectable({ providedIn: 'root' })
export class EventFacade {
  eventList$ = this.selectAllEventAkita();

  constructor(
    private eventGear: EventGear,
    private eventQuery: EventQuery
  ) {
  }

  selectAllEventAkita() {
    return this.eventQuery.selectAll()
      .pipe(
        map(data => data.map(item => ({ ...item })))
      );
  }

  getAllEvents() {
    return this.eventGear.getAllEvents();
  }

}
