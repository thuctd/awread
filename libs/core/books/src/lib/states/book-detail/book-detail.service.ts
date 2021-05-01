import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { BookDetailStore } from './book-detail.store';

@Injectable({ providedIn: 'root' })
export class BookDetailService {

  constructor(
    private bookDetailStore: BookDetailStore,
  ) {
  }

  get() {
    return of({}).pipe(tap(entities => this.bookDetailStore.update(entities)));
  }

}
