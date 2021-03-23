import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ChaptersStore } from './chapters.store';

@Injectable({ providedIn: 'root' })
export class ChaptersService {

  constructor(
    private chaptersStore: ChaptersStore,
  ) {
  }

  get() {
    return of([]).pipe(tap(entities => this.chaptersStore.update(entities)));
  }

}
