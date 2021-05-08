import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface ChapterDetailState {
  chapterId: string;
}

export function createInitialState(): ChapterDetailState {
  return {
    chapterId: '',
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'chapter-detail', resettable: true })
export class ChapterDetailStore extends Store<ChapterDetailState> {

  constructor() {
    super(createInitialState());
  }

}
