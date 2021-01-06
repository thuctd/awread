import { Injectable } from '@angular/core';
import { Order, QueryConfig, QueryEntity } from '@datorama/akita';
import { map } from 'rxjs/operators';
import { ChaptersStore, ChaptersState } from './chapters.store';
// import { ChaptersStore, ChaptersState, ChaptersUIState } from './chapters.store';

@Injectable({ providedIn: 'root' })
// @QueryConfig({ sortBy: 'createdat', sortByOrder: Order.DESC })
export class ChaptersQuery extends QueryEntity<ChaptersState> {
  // ui: EntityUIQuery<ChaptersUIState>;
  chapterList$ = this.selectAll().pipe(
    map((chapters) => {
      if (chapters.length) {
        // data chapter tra ve theo thu tu gioam dan de hien thi cac chuong moi nhat
        let chapter = chapters.length;
        return chapters.map((item) => {
          // them so chuong cho moi chhapter
          chapter = chapter - 1;
          return { ...item, chapterNumber: chapter + 1 };
        });
      }
      return [];
    })
  );
  constructor(protected store: ChaptersStore) {
    super(store);
    // this.createUIQuery();
  }
}
