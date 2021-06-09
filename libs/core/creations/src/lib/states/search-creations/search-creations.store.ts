import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Creation } from '../../models';

export interface SearchCreationsState extends EntityState<Creation>, ActiveState {
  searchTerm: string;
}
const initialState = {
  searchTerm: '',
};


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' search-creations', resettable: true, idKey: 'bookId' })
export class SearchCreationsStore extends EntityStore<SearchCreationsState> {
  // ui: EntityUIStore<SearchCreationUIState>;
  constructor() {
    super(initialState);
    // this.createUIStore().setInitialEntityState();
  }

}
