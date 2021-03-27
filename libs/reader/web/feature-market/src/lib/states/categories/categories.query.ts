import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CategoriesStore, CategoriesState } from './categories.store';
// import { CategoriesStore, CategoriesState, CategoriesUIState } from './categories.store';

@Injectable({ providedIn: 'root' })
export class CategoriesQuery extends QueryEntity<CategoriesState> {
  categoriesList$ = this.selectAll();
  // ui: EntityUIQuery<CategoriesUIState>;
  constructor(protected store: CategoriesStore) {
    super(store);
    // this.createUIQuery();
  }

}
