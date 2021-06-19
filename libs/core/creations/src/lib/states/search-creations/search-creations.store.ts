import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Creation } from '../../models';

export interface SearchCreationsState extends EntityState<Creation>, ActiveState { }

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' search-creations', resettable: true, idKey: 'bookId' })
export class SearchCreationsStore extends EntityStore<SearchCreationsState> {
  // ui: EntityUIStore<SearchCreationUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }

}
