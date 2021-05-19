import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { NewsStore } from './news.store';

@Injectable({ providedIn: 'root' })
export class NewsService {

  constructor(
    private newsStore: NewsStore,
  ) {
  }

  get() {
    return of([]).pipe(tap(entities => this.newsStore.update(entities)));
  }

}
