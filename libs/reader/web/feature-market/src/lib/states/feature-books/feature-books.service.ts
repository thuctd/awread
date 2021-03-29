import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { FeatureBooksStore } from './feature-books.store';

@Injectable({ providedIn: 'root' })
export class FeatureBooksService {

  constructor(
    private featureBooksStore: FeatureBooksStore,
  ) {
  }

  get() {
    return of([]).pipe(tap(entities => this.featureBooksStore.update(entities)));
  }

}
