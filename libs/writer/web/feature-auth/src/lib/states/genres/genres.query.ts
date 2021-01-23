import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { GenresStore, GenresState } from './genres.store';
// import { GenresStore, GenresState, GenresUIState } from './genres.store';

@Injectable({ providedIn: 'root' })
export class GenresQuery extends QueryEntity<GenresState> {
  // ui: EntityUIQuery<GenresUIState>;
  constructor(protected store: GenresStore) {
    super(store);
    // this.createUIQuery();
  }

}
