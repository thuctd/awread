import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Book } from '../../models';

export interface BooksState extends EntityState<Book>, ActiveState { };
// export interface BookUI {}

// export interface BooksUIState extends EntityState<BookUI>, ActiveState {}


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'books', resettable: true })
export class BooksStore extends EntityStore<BooksState> {
  // ui: EntityUIStore<BookUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }

}
