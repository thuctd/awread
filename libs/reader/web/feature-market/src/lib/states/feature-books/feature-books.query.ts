import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { FeatureBooksStore, FeatureBooksState } from './feature-books.store';
// import { FeatureBooksStore, FeatureBooksState, FeatureBooksUIState } from './feature-books.store';

@Injectable({ providedIn: 'root' })
export class FeatureBooksQuery extends QueryEntity<FeatureBooksState> {
  featureBookList$ = this.selectAll();
  // ui: EntityUIQuery<FeatureBooksUIState>;
  constructor(protected store: FeatureBooksStore) {
    super(store);
    // this.createUIQuery();
  }

}
