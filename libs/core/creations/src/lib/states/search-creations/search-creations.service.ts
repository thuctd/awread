import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SearchCreationsStore } from './search-creations.store';

@Injectable({ providedIn: 'root' })
export class SearchCreationsService {

  constructor(
    private searchCreationsStore: SearchCreationsStore,
  ) {
  }

  get() {
    return of([]).pipe(tap(entities => this.searchCreationsStore.update(entities)));
  }

}
