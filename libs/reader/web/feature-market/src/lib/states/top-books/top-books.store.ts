import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Book } from '../../models';

export enum VISIBILITY_FILTER {
  SHOW_ALL = 'SHOW_ALL'
}

export interface TopBooksState extends EntityState<Book>, ActiveState { };

// export interface TopBookUI {}

// export interface TopBooksUIState extends EntityState<TopBookUI>, ActiveState {}


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' top-books', resettable: true })
export class TopBooksStore extends EntityStore<TopBooksState> {
  // ui: EntityUIStore<TopBookUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }

}
