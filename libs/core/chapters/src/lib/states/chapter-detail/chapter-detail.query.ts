import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { ChapterDetailStore, ChapterDetailState } from './chapter-detail.store';

@Injectable({ providedIn: 'root' })
export class ChapterDetailQuery extends Query<ChapterDetailState> {

  constructor(protected store: ChapterDetailStore) {
    super(store);
  }

}
