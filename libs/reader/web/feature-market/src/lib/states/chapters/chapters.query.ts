import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ChaptersStore, ChaptersState } from './chapters.store';
// import { ChaptersStore, ChaptersState, ChaptersUIState } from './chapters.store';

@Injectable({ providedIn: 'root' })
export class ChaptersQuery extends QueryEntity<ChaptersState> {
  chapterList$ = this.selectAll().pipe();
  // ui: EntityUIQuery<ChaptersUIState>;
  constructor(protected store: ChaptersStore) {
    super(store);
    // this.createUIQuery();
  }

}
