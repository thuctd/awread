import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { NewsStore, NewsState } from './news.store';
// import { NewsStore, NewsState, NewsUIState } from './news.store';

@Injectable({ providedIn: 'root' })
export class NewsQuery extends QueryEntity<NewsState> {
  // ui: EntityUIQuery<NewsUIState>;
  constructor(protected store: NewsStore) {
    super(store);
    // this.createUIQuery();
  }

}
