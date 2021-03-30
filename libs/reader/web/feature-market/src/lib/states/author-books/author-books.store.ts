import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Book } from '../../models';

export enum VISIBILITY_FILTER {
  SHOW_ALL = 'SHOW_ALL'
}

export interface AuthorBooksState extends EntityState<Book>, ActiveState { };

// export interface AuthorBookUI {}

// export interface AuthorBooksUIState extends EntityState<AuthorBookUI>, ActiveState {}


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' author-books', resettable: true })
export class AuthorBooksStore extends EntityStore<AuthorBooksState> {
  // ui: EntityUIStore<AuthorBookUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }

}
