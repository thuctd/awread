import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface BookDetailState {
  key: string;
}

export function createInitialState(): BookDetailState {
  return {
    key: 'value'
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'book-detail', resettable: true })
export class BookDetailStore extends Store<BookDetailState> {

  constructor() {
    super(createInitialState());
  }

}
