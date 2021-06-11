import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { tap, map, switchMap } from 'rxjs/operators';
import { BooksHomeApi } from '../apis';
import { FeatureBooksQuery, FeatureBooksStore } from '../states/feature-books';
import { GoodBooksStore } from '../states/good-books';
import { LatestBooksQuery, LatestBooksStore } from '../states/latest-books';
import { paginationPageInfo } from '@awread/global/tools';
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
    return this.booksHomeApi.getGoodBooks(limit).pipe(
      paginationPageInfo(this.goodBooksStore),
      tap((books) => this.goodBooksStore.set(books)),
      tap(() => this.goodBooksStore.setLoading(false))
    );
  }

  getFeatureBooks(limit: number = 12, isCheck?: boolean) {
    const first = isCheck ? limit : 6;
    return this.featureBooksQuery
      .select((state) => state.currentPage)
      .pipe(
        tap(() => this.featureBooksStore.setLoading(true)),
        switchMap((currentPage) => this.booksHomeApi.getFeatureBooks(currentPage, first, isCheck)),
        paginationPageInfo(this.featureBooksStore),
        tap((books) => this.featureBooksStore.set(books)),
        tap(() => this.featureBooksStore.setLoading(false))
      );
  }

  getLatestBooks(limit: number = window.innerWidth <= 768 ? 6 : 10, isAdd?) {
    return combineLatest([
      this.latestBooksQuery.select((state) => state.currentCategoryId),
      this.latestBooksQuery.select((state) => state.currentPage),
    ]).pipe(
      tap(() => this.latestBooksStore.setLoading(true)),
      switchMap(([currentCategoryId, currentPage]) => this.booksHomeApi.getLatestBooks(currentCategoryId, currentPage, limit, isAdd)),
      paginationPageInfo(this.latestBooksStore),
      tap((books) => {
        console.log('books', books);
        if (isAdd) {
          this.latestBooksStore.add(books);
        } else {
          this.latestBooksStore.set(books);
        }
      }),
      tap(() => this.latestBooksStore.setLoading(false))
    );
  }
}
