import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { GenreBook } from '../../models';

export interface GenreBooksState extends EntityState<GenreBook>, ActiveState {
  currentGenreId: string;
}

export const initState = {
  currentGenreId: '',
};
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' genre-books', resettable: true, idKey: 'bookId' })
export class GenreBooksStore extends EntityStore<GenreBooksState> {
  // ui: EntityUIStore<GenreBookUIState>;
  constructor() {
    super(initState);
    // this.createUIStore().setInitialEntityState();
  }

  setCurrentGenre(genreId) {
    this.update({ currentGenreId: genreId });
  }
}
