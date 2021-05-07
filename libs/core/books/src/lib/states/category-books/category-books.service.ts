import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CategoryBooksStore } from './category-books.store';

@Injectable({ providedIn: 'root' })
export class CategoryBooksService {

  constructor(
    private categoryBooksStore: CategoryBooksStore,
  ) {
  }

  get() {
    return of([]).pipe(tap(entities => this.categoryBooksStore.update(entities)));
  }

}
