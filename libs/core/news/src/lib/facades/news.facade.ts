import { NewsQuery } from './../states/news/news.query';
import { NewsGear } from './../gears/news.gear';
import { Injectable } from '@angular/core';
import { NewsStore } from '../states/news/news.store';

@Injectable({ providedIn: 'root' })
export class NewsFacade {
  news$ = this.newsQuery.selectAll();

  constructor(private newsGear: NewsGear, private newsStore: NewsStore, private newsQuery: NewsQuery) {}

  get() {
    return this.newsGear.get();
  }

  selectEntity(blogId) {
    return this.newsQuery.selectEntity(blogId);
  }
}
