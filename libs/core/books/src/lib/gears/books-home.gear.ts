import { Injectable } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { BooksHomeApi } from '../apis';
import { FeatureBooksQuery, FeatureBooksStore } from '../states/feature-books';
import { GoodBooksStore } from '../states/good-books';
import { LatestBooksQuery, LatestBooksStore } from '../states/latest-books';
import { pageInfoToAkita } from '@awread/global/tools';
import { GenreBooksQuery, GenreBooksStore } from '../states/genre-books';
@Injectable({ providedIn: 'root' })
export class BooksHomeGear {
  constructor(
    private booksHomeApi: BooksHomeApi,
    private latestBooksStore: LatestBooksStore,
    private featureBooksStore: FeatureBooksStore,
    private goodBooksStore: GoodBooksStore,
    private genreBooksStore: GenreBooksStore,
    private latestBooksQuery: LatestBooksQuery,
    private featureBooksQuery: FeatureBooksQuery,
    private genreBooksQuery: GenreBooksQuery,
  ) { }

  getGoodBooks(limit = 5) {
    return of(true)
      .pipe(
        pageInfoToAkita(this.goodBooksStore, () => this.booksHomeApi.getGoodBooks(limit))
      );
  }

  getFeatureBooks(limit = 6) {
    return this.featureBooksQuery
      .select((state) => state.currentPage)
      .pipe(
        pageInfoToAkita(this.featureBooksStore, (currentPage) => this.booksHomeApi.getFeatureBooks(currentPage, limit)),
      );
  }

  getLatestBooks(limit = 10) {
    return combineLatest([
      this.latestBooksQuery.select((state) => state.currentCategoryId),
      this.latestBooksQuery.select((state) => state.currentPage),
    ]).pipe(
      pageInfoToAkita(this.latestBooksStore, ([currentCategoryId, currentPage]) => this.booksHomeApi.getLatestBooks(currentPage, limit, currentCategoryId)),
    );
  }

  getGenreBooks(limit = 10) {
    return this.genreBooksQuery
      .select((state) => state.currentGenreId)
      .pipe(
        pageInfoToAkita(this.genreBooksStore, (currentGenreId) => this.booksHomeApi.getGenreBooks(currentGenreId, limit)),
      );
  }

}
