import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { AuthorBooksStore, AuthorBooksState } from './author-books.store';
// import { AuthorBooksStore, AuthorBooksState, AuthorBooksUIState } from './author-books.store';

@Injectable({ providedIn: 'root' })
export class AuthorBooksQuery extends QueryEntity<AuthorBooksState> {
  // ui: EntityUIQuery<AuthorBooksUIState>;
  constructor(protected store: AuthorBooksStore) {
    super(store);
    // this.createUIQuery();
  }

}
