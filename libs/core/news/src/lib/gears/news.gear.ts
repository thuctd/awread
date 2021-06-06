import { NewsStore } from './../states/news/news.store';
import { NewsApi } from './../apis/news.api';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from '@awread/global/environments';

@Injectable({ providedIn: 'root' })
export class NewsGear {
  constructor(private newsApi: NewsApi, private newsStore: NewsStore) {}

  get() {
    const fakeData = {};

    return this.newsApi.get().pipe(
      tap((data: any) => {
        if (environment) {
          this.newsStore.set(data);
        } else {
          this.newsStore.set(fakeData);
        }
      })
    );
  }
}
