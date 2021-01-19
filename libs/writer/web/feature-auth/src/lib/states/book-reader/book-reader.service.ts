import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { BookReaderStore } from './book-reader.store';

@Injectable({ providedIn: 'root' })
export class BookReaderService {

  constructor(
    private bookReaderStore: BookReaderStore,
  ) {
  }

  get() {
    return of([]).pipe(tap(entities => this.bookReaderStore.update(entities)));
  }

}
