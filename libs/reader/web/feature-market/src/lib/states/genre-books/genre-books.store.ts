import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Book } from '../../models';

export enum VISIBILITY_FILTER {
  SHOW_ALL = 'SHOW_ALL'
}

export interface GenreBooksState extends EntityState<Book>, ActiveState { };

// export interface GenreBookUI {}

// export interface GenreBooksUIState extends EntityState<GenreBookUI>, ActiveState {}


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' genre-books', resettable: true })
export class GenreBooksStore extends EntityStore<GenreBooksState> {
  // ui: EntityUIStore<GenreBookUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }

}
