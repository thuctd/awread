import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { SearchCreationsStore, SearchCreationsState } from './search-creations.store';
// import { SearchCreationsStore, SearchCreationsState, SearchCreationsUIState } from './search-creations.store';

@Injectable({ providedIn: 'root' })
export class SearchCreationsQuery extends QueryEntity<SearchCreationsState> {
  // ui: EntityUIQuery<SearchCreationsUIState>;
  constructor(protected store: SearchCreationsStore) {
    super(store);
    // this.createUIQuery();
  }

}
