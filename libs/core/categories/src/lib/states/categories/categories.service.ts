import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CategoriesStore } from './categories.store';

@Injectable({ providedIn: 'root' })
export class CategoriesService {

  constructor(
    private categoriesStore: CategoriesStore,
  ) {
  }

  get() {
    return of([]).pipe(tap(entities => this.categoriesStore.update(entities)));
  }

}
