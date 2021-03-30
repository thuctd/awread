import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { GenreBooksStore, GenreBooksState } from './genre-books.store';
// import { GenreBooksStore, GenreBooksState, GenreBooksUIState } from './genre-books.store';

@Injectable({ providedIn: 'root' })
export class GenreBooksQuery extends QueryEntity<GenreBooksState> {
  genreBookList$ = this.selectAll();
  // ui: EntityUIQuery<GenreBooksUIState>;
  constructor(protected store: GenreBooksStore) {
    super(store);
    // this.createUIQuery();
  }

}
