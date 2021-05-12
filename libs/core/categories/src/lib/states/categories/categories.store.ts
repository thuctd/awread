import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Category } from '../../models';

export interface CategoriesState extends EntityState<Category>, ActiveState { };

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' categories', resettable: true, idKey: 'categoryId' })
export class CategoriesStore extends EntityStore<CategoriesState> {
  // ui: EntityUIStore<CategoryUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }

}
