import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthorsStore } from './authors.store';

@Injectable({ providedIn: 'root' })
export class AuthorsService {

  constructor(
    private authorsStore: AuthorsStore,
  ) {
  }

  get() {
    return of([]).pipe(tap(entities => this.authorsStore.update(entities)));
  }

}
