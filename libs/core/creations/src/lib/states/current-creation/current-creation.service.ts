import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CurrentCreationStore } from './current-creation.store';

@Injectable({ providedIn: 'root' })
export class CurrentCreationService {

  constructor(
    private currentCreationStore: CurrentCreationStore,
  ) {
  }

  get() {
    return of({}).pipe(tap(entities => this.currentCreationStore.update(entities)));
  }

}
