import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Genre } from '../../models';

export enum VISIBILITY_FILTER {
  SHOW_ALL = 'SHOW_ALL',
}

export interface GenresState extends EntityState<Genre>, ActiveState {
  ui: {
    filter: VISIBILITY_FILTER;
  };
}

// export interface GenreUI {}

// export interface GenresUIState extends EntityState<GenreUI>, ActiveState {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'genres', resettable: true, idKey: 'genreid' })
export class GenresStore extends EntityStore<GenresState> {
  // ui: EntityUIStore<GenreUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }
}
