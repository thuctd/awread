import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { BooksHomeApi } from '../apis';
import { FeatureBooksStore } from '../states/feature-books';
import { GoodBooksStore } from '../states/good-books';
import { LatestBooksStore } from '../states/latest-books';
import { TransformBookDataGear } from './transform-book-data.gear';

@Injectable({ providedIn: 'root' })
export class BooksHomeGear {

  constructor(
    private transformBookDataGear: TransformBookDataGear,
    private latestBooksStore: LatestBooksStore,
    private featureBooksStore: FeatureBooksStore,
    private goodBooksStore: GoodBooksStore,
    private booksHomeApi: BooksHomeApi
  ) { }

  getGoodBooks() {
    return this.booksHomeApi.getGoodBooks().pipe(
      map((result) => result.map(book => this.transformBookDataGear.tranformBookHomeData(book))),
      tap(books => this.goodBooksStore.set(books))
    );
  }

  getFeatureBooks() {
    return this.booksHomeApi.getFeatureBooks().pipe(
      map((result) => result.map(book => this.transformBookDataGear.tranformBookData(book))),
      tap(books => this.featureBooksStore.set(books))
    );
  }

  getLatestBooks() {
    return this.booksHomeApi.getLatestBooks().pipe(
      map((result) => result.map(book => this.transformBookDataGear.tranformBookHomeData(book))),
      tap(books => this.latestBooksStore.set(books))
    );
  }

}
