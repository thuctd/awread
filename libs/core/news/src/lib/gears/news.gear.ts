import { NewsStore } from './../states/news/news.store';
import { NewsApi } from './../apis/news.api';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class NewsGear {
  constructor(private newsApi: NewsApi, private newsStore: NewsStore) {}

  get() {
    return this.newsApi.get().pipe(
      tap((value) => console.log('news', value)),
      tap((value: any) => this.newsStore.set(value))
    );
  }
}
