import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CreationsStore } from './creations.store';

@Injectable({ providedIn: 'root' })
export class CreationsService {

  constructor(
    private creationsStore: CreationsStore,
  ) {
  }

  get() {
    return of({}).pipe(tap(entities => this.creationsStore.update(entities)));
  }

}
