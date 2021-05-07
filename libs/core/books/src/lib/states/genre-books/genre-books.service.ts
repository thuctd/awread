import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { GenreBooksStore } from './genre-books.store';

@Injectable({ providedIn: 'root' })
export class GenreBooksService {

  constructor(
    private genreBooksStore: GenreBooksStore,
  ) {
  }

  get() {
    return of([]).pipe(tap(entities => this.genreBooksStore.update(entities)));
  }

}
