import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Author } from '../../models';

export interface AuthorState extends EntityState<Author>, ActiveState { };
// export interface AuthorUI {}

// export interface AuthorUIState extends EntityState<AuthorUI>, ActiveState {}


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'dasherize(name)', resettable: true })
export class AuthorStore extends EntityStore<AuthorState> {
  // ui: EntityUIStore<AuthorUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }

}
