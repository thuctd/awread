import { NewsQuery } from './../states/news/news.query';
import { NewsGear } from './../gears/news.gear';
import { Injectable } from '@angular/core';
import { NewsStore } from '../states/news/news.store';

@Injectable({ providedIn: 'root' })
export class NewsFacade {
  news$ = this.newsQuery.selectAll();
  newsDetail$ = this.newsQuery.selectEntity(1);

  constructor(private newsGear: NewsGear, private newsStore: NewsStore, private newsQuery: NewsQuery) {}

  get() {
    return this.newsGear.get();
  }

  selectEntityNews(blogId: string) {
    return this.newsQuery.selectEntity(blogId);
  }
}
