import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { BookReader } from '../../models';

export interface BookReaderState extends EntityState<BookReader>, ActiveState { };
// export interface BookReaderUI {}

// export interface BookReaderUIState extends EntityState<BookReaderUI>, ActiveState {}


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'dasherize(name)', resettable: true })
export class BookReaderStore extends EntityStore<BookReaderState> {
  // ui: EntityUIStore<BookReaderUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }

}
