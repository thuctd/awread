import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { AuthorStore, AuthorState } from './author.store';
// import { AuthorStore, AuthorState, AuthorUIState } from './author.store';

@Injectable({ providedIn: 'root' })
export class AuthorQuery extends QueryEntity<AuthorState> {
  // ui: EntityUIQuery<AuthorUIState>;
  constructor(protected store: AuthorStore) {
    super(store);
    // this.createUIQuery();
  }

}
