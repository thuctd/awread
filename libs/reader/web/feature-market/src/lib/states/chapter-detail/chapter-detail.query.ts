import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ChapterDetailStore, ChapterDetailState } from './chapter-detail.store';
// import { ChapterDetailStore, ChapterDetailState, ChapterDetailUIState } from './chapter-detail.store';

@Injectable({ providedIn: 'root' })
export class ChapterDetailQuery extends QueryEntity<ChapterDetailState> {
  // ui: EntityUIQuery<ChapterDetailUIState>;
  constructor(protected store: ChapterDetailStore) {
    super(store);
    // this.createUIQuery();
  }

}
