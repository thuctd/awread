import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Book } from '../../models';

export interface SearchBooksState extends EntityState<Book>, ActiveState { };


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' search-books', resettable: true, idKey: 'bookId' })
export class SearchBooksStore extends EntityStore<SearchBooksState> {
  // ui: EntityUIStore<SearchBookUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }

}
