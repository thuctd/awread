import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import db from './db.json';

@Injectable({ providedIn: 'root' })
export class GenresApi {
  constructor(private apollo: Apollo) { }

  get() { }

  getAllGenres() {
    return of(db.genres).pipe(delay(500));
  }

}
