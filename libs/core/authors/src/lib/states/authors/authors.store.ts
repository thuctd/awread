import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Author } from '../../models';

export enum VISIBILITY_FILTER {
    SHOW_ALL = 'SHOW_ALL'
}

export interface AuthorsState extends EntityState<Author>, ActiveState {
  ui: {
    filter: VISIBILITY_FILTER;
  };
}
const initialState = {
  ui: { 
    filter: VISIBILITY_FILTER.SHOW_ALL
   }
};

// export interface AuthorUI {}

// export interface AuthorsUIState extends EntityState<AuthorUI>, ActiveState {}


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' authors', resettable: true })
export class AuthorsStore extends EntityStore<AuthorsState> {
  // ui: EntityUIStore<AuthorUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }

}
