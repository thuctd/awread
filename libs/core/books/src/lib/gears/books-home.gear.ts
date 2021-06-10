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

  getGoodBooks(limit: number = 12) {
    this.goodBooksStore.setLoading(true);
    let hasMore, total;
    return this.booksHomeApi.getGoodBooks(limit).pipe(
      map((res) => {
        hasMore = res?.['data']?.['allMvMostViewBooks']?.['pageInfo']?.hasNextPage;
        total = res?.['data']?.['allMvMostViewBooks']?.totalCount;
        return res?.['data']?.['allMvMostViewBooks']?.['nodes'];
      }),
      tap(books => this.goodBooksStore.set(books)),
      tap(() => this.goodBooksStore.updatePage({ hasMore: hasMore, sizePage: limit,total: total })),
      tap(() => this.goodBooksStore.setLoading(false))
    );
  }

  getFeatureBooks(offset: number, isCheck?: boolean) {
    this.featureBooksStore.setLoading(true);
    const first = isCheck ? 12 : 6;
    let hasMore, total;
    return this.booksHomeApi.getFeatureBooks(offset, first).pipe(
      map((res) => {
        hasMore = res?.['data']?.['allMvMostViewBooks']?.['pageInfo']?.hasNextPage;
        total = res?.['data']?.['allMvMostViewBooks']?.totalCount;
        return res?.['data']?.['allMvMostViewBooks']?.['nodes'];
      }),
      tap(books => { if(isCheck) { this.featureBooksStore.add(books) } else { this.featureBooksStore.set(books)}}),
      tap(() => this.featureBooksStore.updatePage({ hasMore: hasMore, total: total })),
      tap(() => this.featureBooksStore.setLoading(false))
    );
  }

  getLatestBooks(categoryId: string, offset: number, isCheck?: boolean) {
    this.latestBooksStore.setLoading(true);
    let hasMore, total;
    return this.booksHomeApi.getLatestBooks(categoryId, offset).pipe(
      map((res) => {
        hasMore = res?.['data']?.['allMvBooksLatestChapters']?.['pageInfo']?.hasNextPage;
        total = res?.['data']?.['allMvBooksLatestChapters']?.totalCount;
        return res?.['data']?.['allMvBooksLatestChapters']?.['nodes'];
      }),
      tap(books => { if(isCheck) { this.latestBooksStore.add(books) } else { this.latestBooksStore.set(books)}}),
      tap(() => this.latestBooksStore.updatePage({ hasMore: hasMore, total: total })),
      tap(() => this.latestBooksStore.setLoading(false))
    );
  }
}
