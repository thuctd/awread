import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthorBooksStore } from './author-books.store';

@Injectable({ providedIn: 'root' })
export class AuthorBooksService {

  constructor(
    private authorBooksStore: AuthorBooksStore,
  ) {
  }

  get() {
    return of([]).pipe(tap(entities => this.authorBooksStore.update(entities)));
  }

}
