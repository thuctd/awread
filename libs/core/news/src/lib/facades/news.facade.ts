import { NewsQuery } from './../states/news/news.query';
import { NewsGear } from './../gears/news.gear';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NewsFacade {
  news$ = this.newsQuery.selectAll();

  constructor(private newsGear: NewsGear, private newsQuery: NewsQuery) {}

  get() {
    return this.newsGear.get();
  }
}
