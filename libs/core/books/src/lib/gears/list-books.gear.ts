import { CategoryBooksQuery } from './../states/category-books/category-books.query';
import { Injectable } from '@angular/core';
import { log, pageInfoToAkita } from '@awread/global/tools';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ListBooksApi } from '../apis';
import { TopBooksStore, TopBooksQuery } from './../states/top-books';
import { GoodBooksStore, GoodBooksQuery } from './../states/good-books';
import { FeatureBooksQuery, FeatureBooksStore } from '../states/feature-books';
import { LatestBooksQuery, LatestBooksStore } from '../states/latest-books';
import { CategoryBooksStore } from '../states/category-books';
import { AuthorBooksQuery, AuthorBooksStore } from '../states/author-books';

@Injectable({ providedIn: 'root' })
export class ListBooksGear {

  constructor(
    private listBooksApi: ListBooksApi,
    private topBooksStore: TopBooksStore,
    private topBooksQuery: TopBooksQuery,
    private goodBooksStore: GoodBooksStore,
    private goodBooksQuery: GoodBooksQuery,
    private authorBooksStore: AuthorBooksStore,
    private authorBooksQuery: AuthorBooksQuery,
    private latestBooksStore: LatestBooksStore,
    private latestBooksQuery: LatestBooksQuery,
    private featureBooksStore: FeatureBooksStore,
    private featureBooksQuery: FeatureBooksQuery,
    private categoryBooksStore: CategoryBooksStore,
    private categoryBooksQuery: CategoryBooksQuery,
  ) {
  }

  getTopBookByCursor(action, first = 20) {
    return of(this.topBooksQuery.getEndCursor())
      .pipe(
        pageInfoToAkita(this.topBooksStore, (cursor) => this.listBooksApi.getTopBookByCursor(cursor, first), action)
      )
  }

  getGoodBookByCursor(action, first = 20) {
    return of(this.goodBooksQuery.getEndCursor())
      .pipe(
        pageInfoToAkita(this.goodBooksStore, (cursor) => this.listBooksApi.getGoodBookByCursor(cursor, first), action)
      )
  }

  getLatestBookByCursor(action, first = 20) {
    return of(this.latestBooksQuery.getEndCursor())
      .pipe(
        pageInfoToAkita(this.latestBooksStore, (cursor) => this.listBooksApi.getLatestBookByCursor(cursor, first), action)
      )
  }

  getFeaturetBookByCursor(action, first = 20) {
    return of(this.featureBooksQuery.getEndCursor())
      .pipe(
        pageInfoToAkita(this.featureBooksStore, (cursor) => this.listBooksApi.getFeaturetBookByCursor(cursor, first), action)
      )
  }

  getCategoryBookByCursor(categoryId, action, first = 20) {
    return of(this.categoryBooksQuery.getEndCursor())
      .pipe(
        pageInfoToAkita(this.categoryBooksStore, (cursor) => this.listBooksApi.getCategoryBookByCursor(categoryId, cursor, first), action)
      )
  }

  getAuthorBookByCursor(authors, action, first = 20) {
    return of(this.authorBooksQuery.getEndCursor())
      .pipe(
        pageInfoToAkita(this.authorBooksStore, (cursor) => this.listBooksApi.getAuthorBookByCursor(authors, cursor, first), action)
      )
  }
}
