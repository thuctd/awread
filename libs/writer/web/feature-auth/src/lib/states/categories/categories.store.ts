import { Injectable } from '@angular/core';
import {
  EntityState,
  EntityStore,
  StoreConfig,
  ActiveState,
} from '@datorama/akita';
import { Category } from '../../models';

export enum VISIBILITY_FILTER {
  SHOW_ALL = 'SHOW_ALL',
}

export interface CategoriesState extends EntityState<Category>, ActiveState {
  ui: {
    filter: VISIBILITY_FILTER;
  };
}

// export interface CategoryUI {}

// export interface CategoriesUIState extends EntityState<CategoryUI>, ActiveState {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'categories', resettable: true, idKey: 'categoryid' })
export class CategoriesStore extends EntityStore<CategoriesState> {
  // ui: EntityUIStore<CategoryUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }
}
