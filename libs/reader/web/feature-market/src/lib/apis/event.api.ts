import { Injectable } from '@angular/core';
import { Apollo, gql } from "apollo-angular";
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import db from './db.json';

@Injectable({ providedIn: 'root' })
export class EventApi {

  constructor(
    private apollo: Apollo
  ) { }

  getAllEvents() {
    return of(db.events)
      .pipe(delay(500));
  }

}
