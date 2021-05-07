import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { AuthorsStore, AuthorsState } from './authors.store';
// import { AuthorsStore, AuthorsState, AuthorsUIState } from './authors.store';

@Injectable({ providedIn: 'root' })
export class AuthorsQuery extends QueryEntity<AuthorsState> {
  // ui: EntityUIQuery<AuthorsUIState>;
  constructor(protected store: AuthorsStore) {
    super(store);
    // this.createUIQuery();
  }

}
