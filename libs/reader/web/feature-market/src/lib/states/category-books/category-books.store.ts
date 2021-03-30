import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Book } from '../../models';

export interface CategoryBooksState extends EntityState<Book>, ActiveState { };

// export interface CategoryBookUI {}

// export interface CategoryBooksUIState extends EntityState<CategoryBookUI>, ActiveState {}


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' category-books', resettable: true })
export class CategoryBooksStore extends EntityStore<CategoryBooksState> {
  // ui: EntityUIStore<CategoryBookUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }

}
