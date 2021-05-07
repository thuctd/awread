import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { GenresStore } from './genres.store';

@Injectable({ providedIn: 'root' })
export class GenresService {

  constructor(
    private genresStore: GenresStore,
  ) {
  }

  get() {
    return of([]).pipe(tap(entities => this.genresStore.update(entities)));
  }

}
