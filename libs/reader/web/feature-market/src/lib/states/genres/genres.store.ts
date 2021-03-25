import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Genre } from '../../models/genre.model';


export interface GenresState extends EntityState<Genre>, ActiveState { };

// export interface GenreUI {}

// export interface GenresUIState extends EntityState<GenreUI>, ActiveState {}


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' genres', resettable: true })
export class GenresStore extends EntityStore<GenresState> {
  // ui: EntityUIStore<GenreUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }

}
