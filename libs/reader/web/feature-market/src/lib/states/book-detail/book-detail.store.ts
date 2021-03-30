import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { BookDetail } from '../../models';

export interface BookDetailState extends EntityState<BookDetail>, ActiveState { };
// export interface BookDetailUI {}

// export interface BookDetailUIState extends EntityState<BookDetailUI>, ActiveState {}


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'dasherize(name)', resettable: true })
export class BookDetailStore extends EntityStore<BookDetailState> {
  // ui: EntityUIStore<BookDetailUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }

}
