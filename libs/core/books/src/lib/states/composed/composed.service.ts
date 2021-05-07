import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ComposedStore } from './composed.store';

@Injectable({ providedIn: 'root' })
export class ComposedService {

  constructor(
    private composedStore: ComposedStore,
  ) {
  }

  get() {
    return of([]).pipe(tap(entities => this.composedStore.update(entities)));
  }

}
