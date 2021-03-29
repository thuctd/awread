import { EventApi } from './../apis/event.api';
import { Injectable } from '@angular/core';
import { EventStore } from '../states/event';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EventGear {

  constructor(
    private eventStore: EventStore,
    private eventApi: EventApi
  ) {
  }

  getAllEvents() {
    return this.eventApi.getAllEvents().pipe(
      tap((events) => {
        console.log('Events: ', events);
        this.eventStore.set(events);
      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

}
