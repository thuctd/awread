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
    this.init();
  }

  init() {
    this.set([
      {
        name: 'Truyện ngắn',
        categoryId: '1',
      },
      {
        name: 'Truyện dài',
        categoryId: '2',
      },
      {
        name: 'Tản văn',
        categoryId: '3',
      }
    ]);
  }

}
