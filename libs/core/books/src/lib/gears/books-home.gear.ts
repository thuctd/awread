import { Injectable } from '@angular/core';
import { tap, map, delay } from 'rxjs/operators';
import { BooksHomeApi } from '../apis';
import { FeatureBooksStore } from '../states/feature-books';
import { GoodBooksStore } from '../states/good-books';
import { LatestBooksStore } from '../states/latest-books';

@Injectable({ providedIn: 'root' })
export class BooksHomeGear {

  constructor(
    private latestBooksStore: LatestBooksStore,
    private featureBooksStore: FeatureBooksStore,
    private goodBooksStore: GoodBooksStore,
    private booksHomeApi: BooksHomeApi
  ) { }

  getGoodBooks() {
    this.goodBooksStore.setLoading(true);
    return this.booksHomeApi.getGoodBooks().pipe(
      tap(books => this.goodBooksStore.set(books)),
      tap(() => this.goodBooksStore.setLoading(false))
    );
  }

  getFeatureBooks(offset: number) {
    this.featureBooksStore.setLoading(true);
    let hasMore, total;
    return this.booksHomeApi.getFeatureBooks(offset).pipe(
      map((res) => {
        hasMore = res?.['data']?.['allMvMostViewBooks']?.['pageInfo']?.hasNextPage;
        total = res?.['data']?.['allMvMostViewBooks']?.totalCount;
        return res?.['data']?.['allMvMostViewBooks']?.['nodes'];
      }),
      tap(books => this.featureBooksStore.set(books)),
      tap(() => this.featureBooksStore.updatePage({ hasMore: hasMore, total: total })),
      tap(() => this.featureBooksStore.setLoading(false))
    );
  }

  getLatestBooks(categoryId: string, offset: number) {
    this.latestBooksStore.setLoading(true);
    let hasMore, total;
    return this.booksHomeApi.getLatestBooks(categoryId, offset).pipe(
      map((res) => {
        hasMore = res?.['data']?.['allMvBooksLatestChapters']?.['pageInfo']?.hasNextPage;
        total = res?.['data']?.['allMvBooksLatestChapters']?.totalCount;
        return res?.['data']?.['allMvBooksLatestChapters']?.['nodes'];
      }),
      tap(books => this.latestBooksStore.set(books)),
      tap(() => this.latestBooksStore.updatePage({ hasMore: hasMore, total: total })),
      tap(() => this.latestBooksStore.setLoading(false))
    );
  }
}
