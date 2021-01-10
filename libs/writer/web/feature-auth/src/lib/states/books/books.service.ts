import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { BooksStore } from './books.store';

@Injectable({ providedIn: 'root' })
export class BooksService {
  constructor(private booksStore: BooksStore) {}

  get() {
    return of([]).pipe(tap((entities) => this.booksStore.update(entities)));
  }
}
