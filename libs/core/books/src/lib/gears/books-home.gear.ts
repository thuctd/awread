import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { tap, map, switchMap } from 'rxjs/operators';
import { BooksHomeApi } from '../apis';
import { FeatureBooksQuery, FeatureBooksStore } from '../states/feature-books';
import { GoodBooksStore } from '../states/good-books';
import { LatestBooksQuery, LatestBooksStore } from '../states/latest-books';

@Injectable({ providedIn: 'root' })
export class BooksHomeGear {
  constructor(
    private latestBooksStore: LatestBooksStore,
    private featureBooksStore: FeatureBooksStore,
    private goodBooksStore: GoodBooksStore,
    private booksHomeApi: BooksHomeApi,
    private latestBooksQuery: LatestBooksQuery,
    private featureBooksQuery: FeatureBooksQuery
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
      tap((books) => this.goodBooksStore.set(books)),
      tap(() => this.goodBooksStore.updatePage({ hasMore: hasMore, sizePage: limit, total: total })),
      tap(() => this.goodBooksStore.setLoading(false))
    );
  }

  getFeatureBooks(limit: number = 12, isCheck?: boolean) {
    const first = isCheck ? limit : 6;
    let hasMore, total;
    return this.featureBooksQuery
      .select((state) => state.currentPage)
      .pipe(
        tap(() => this.featureBooksStore.setLoading(true)),
        switchMap((currentPage) => this.booksHomeApi.getFeatureBooks(currentPage, first, isCheck)),
        map((res) => {
          hasMore = res?.['data']?.['allMvMostViewBooks']?.['pageInfo']?.hasNextPage;
          total = res?.['data']?.['allMvMostViewBooks']?.totalCount;
          return res?.['data']?.['allMvMostViewBooks']?.['nodes'];
        }),
        tap((books) => this.featureBooksStore.set(books)),
        tap(() => this.featureBooksStore.updatePage({ hasMore: hasMore, total: total, sizePage: first })),
        tap(() => this.featureBooksStore.setLoading(false))
      );
  }

  getLatestBooks(limit: number = window.innerWidth <= 768 ? 6 : 10, isAdd?) {
    let hasMore, total;
    return combineLatest([
      this.latestBooksQuery.select((state) => state.currentCategoryId),
      this.latestBooksQuery.select((state) => state.currentPage),
    ]).pipe(
      tap(() => this.latestBooksStore.setLoading(true)),
      // tap(([currentCategoryId, currentPage]) =>
      //   console.log('currentCategoryId, currentPage', currentCategoryId, currentPage)
      // ),
      switchMap(([currentCategoryId, currentPage]) => this.booksHomeApi.getLatestBooks(currentCategoryId, currentPage, limit, isAdd)),
      map((res) => {
        hasMore = res?.['data']?.['allMvBooksLatestChapters']?.['pageInfo']?.hasNextPage;
        total = res?.['data']?.['allMvBooksLatestChapters']?.totalCount;
        return res?.['data']?.['allMvBooksLatestChapters']?.['nodes'];
      }),
      tap((books) => {
        if (isAdd) {
          this.latestBooksStore.add(books);
        } else {
          this.latestBooksStore.set(books);
        }
      }),
      tap(() => this.latestBooksStore.updatePage({ hasMore: hasMore, total: total, sizePage: limit })),
      tap(() => this.latestBooksStore.setLoading(false))
    );
  }
}
