import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthorStore } from './author.store';

@Injectable({ providedIn: 'root' })
export class AuthorService {

  constructor(
    private authorStore: AuthorStore,
  ) {
  }

  get() {
    return of([]).pipe(tap(entities => this.authorStore.update(entities)));
  }

}
