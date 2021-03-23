import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Category } from '../../models';

export interface CategoriesState extends EntityState<Category>, ActiveState { };

// export interface CategoryUI {}

// export interface CategoriesUIState extends EntityState<CategoryUI>, ActiveState {}


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'dasherize(name)', resettable: true })
export class CategoriesStore extends EntityStore<CategoriesState> {
  // ui: EntityUIStore<CategoryUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }

}
