import { Injectable } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { tap, map, switchMap } from 'rxjs/operators';
import { BooksHomeApi } from '../apis';
import { FeatureBooksQuery, FeatureBooksStore } from '../states/feature-books';
import { GoodBooksStore } from '../states/good-books';
import { LatestBooksQuery, LatestBooksStore } from '../states/latest-books';
import { paginationCombo, paginationPageInfo } from '@awread/global/tools';
import { PaginationBooksGear } from './pagination-books.gear';
import { InfinityScrollBooksGear } from './infinity-scroll-books.gear';
@Injectable({ providedIn: 'root' })
export class BooksHomeGear {
  constructor(
    private latestBooksStore: LatestBooksStore,
    private featureBooksStore: FeatureBooksStore,
    private goodBooksStore: GoodBooksStore,
    private booksHomeApi: BooksHomeApi,
    private latestBooksQuery: LatestBooksQuery,
    private featureBooksQuery: FeatureBooksQuery,
    private paginationBooksGear: PaginationBooksGear,
    private infinitySrollBooksGear: InfinityScrollBooksGear,
  ) { }

  getGoodBooks(limit: number = 12) {
    return of(true)
      .pipe(
        paginationCombo(this.goodBooksStore, () => this.booksHomeApi.getGoodBooks(limit))
      );
  }

  getFeatureBooks(limit: number = 12, isCheck?: boolean) {
    const first = isCheck ? limit : 6;
    return this.featureBooksQuery
      .select((state) => state.currentPage)
      .pipe(
        paginationCombo(this.featureBooksStore, (currentPage) => this.booksHomeApi.getFeatureBooks(currentPage, first, isCheck)),
      );
  }

  getLatestBooks(limit: number = window.innerWidth <= 768 ? 6 : 10, isAdd?) {
    return combineLatest([
      this.latestBooksQuery.select((state) => state.currentCategoryId),
      this.latestBooksQuery.select((state) => state.currentPage),
    ]).pipe(
      paginationCombo(this.latestBooksStore, ([currentCategoryId, currentPage]) => this.booksHomeApi.getLatestBooks(currentCategoryId, currentPage, limit, isAdd)),
    );
  }
}
