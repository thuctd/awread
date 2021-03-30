import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { EventStore } from './event.store';

@Injectable({ providedIn: 'root' })
export class EventService {

  constructor(
    private eventStore: EventStore,
  ) {
  }

  get() {
    return of([]).pipe(tap(entities => this.eventStore.update(entities)));
  }

}
