import { Injectable } from '@angular/core';
import { Order, QueryConfig, QueryEntity } from '@datorama/akita';
import { map } from 'rxjs/operators';
import { ChaptersStore, ChaptersState } from './chapters.store';
// import { ChaptersStore, ChaptersState, ChaptersUIState } from './chapters.store';

@Injectable({ providedIn: 'root' })
// @QueryConfig({ sortBy: 'createdat', sortByOrder: Order.DESC })
export class ChaptersQuery extends QueryEntity<ChaptersState> {
  // ui: EntityUIQuery<ChaptersUIState>;
  chapterList$ = this.selectAll().pipe();
  constructor(protected store: ChaptersStore) {
    super(store);
    // this.createUIQuery();
  }
}
