import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CollectedStore } from './collected.store';

@Injectable({ providedIn: 'root' })
export class CollectedService {

  constructor(
    private collectedStore: CollectedStore,
  ) {
  }

  get() {
    return of([]).pipe(tap(entities => this.collectedStore.update(entities)));
  }

}
