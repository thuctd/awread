import { NewsStore } from './../states/news/news.store';
import { NewsApi } from './../apis/news.api';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from '@awread/global/environments';

@Injectable({ providedIn: 'root' })
export class NewsGear {
  constructor(private newsApi: NewsApi, private newsStore: NewsStore) {}

  getAllNews() {
    const fakeData = {};

    return this.newsApi.get().pipe(
      tap((data: any) => {
        this.newsStore.set(data);
      })
    );
  }

  getContentNews(newsId) {
    return this.newsApi.getContentNews(newsId);
  }
}
