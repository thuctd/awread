import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface ChapterDetailState {
  key: string;
}

export function createInitialState(): ChapterDetailState {
  return {
    key: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'chapter-detail', resettable: true })
export class ChapterDetailStore extends Store<ChapterDetailState> {

  constructor() {
    super(createInitialState());
  }

}
