import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
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
    // TODO: refactor như này
    return this.booksHomeApi.getGoodBooks().pipe(
      map((result) => result.map(book => this.transformBookDataGear.tranformBookHomeData(book))),
      tap(books => this.goodBooksStore.set(books))
    );
  }

  getFeatureBooks() {
    return this.booksHomeApi.getFeatureBooks().pipe(
      map((result) => result.map(book => this.transformBookDataGear.tranformBookHomeData(book))),
      tap(books => this.featureBooksStore.set(books))
      // TODO: phần biến đổi chuyển hết vào trong API
      // CATCH ERROR: không cần làm nữa vì đã có error interceptor 
      // tap((res) => {
      //   if (
      //     res['data'] &&
      //     res['data']['allBooks'] &&
      //     res['data']['allBooks']['nodes'].length
      //   ) {
      //     const result = res['data']['allBooks']['nodes'];
      //     const books = result.map((book) =>
      //       this.transformBookDataGear.tranformBookData(book)
      //     );
      //     this.featureBooksStore.set(books);
      //   }
      // }),
      // catchError((err) => {
      //   console.error('An error occurred:', err);
      //   return throwError(err);
      // })
    );
  }

  getLatestBooks() {
    return this.booksHomeApi.getLatestBooks().pipe(
      map((result) => result.map(book => this.transformBookDataGear.tranformBookHomeData(book))),
      tap(books => this.latestBooksStore.set(books))
      // map((res) => {
      //   if (
      //     res['data'] &&
      //     res['data']['allMvBooksLatestChapters'] &&
      //     res['data']['allMvBooksLatestChapters']['nodes'].length
      //   ) {
      //     const result = res['data']['allMvBooksLatestChapters']['nodes'];
      //     const books = result.map((book) =>
      //       this.transformBookDataGear.tranformBookHomeData(book)
      //     );
      //     this.latestBooksStore.set(books);
      //   }
      // }),
      // catchError((err) => {
      //   console.error('An error occurred:', err);
      //   return throwError(err);
      // })
    );
  }

}
