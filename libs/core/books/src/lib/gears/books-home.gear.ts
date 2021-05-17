import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs/operators';
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
    return this.booksHomeApi.getGoodBooks().pipe(
      tap(books => this.goodBooksStore.set(books))
    );
  }

  getFeatureBooks() {
    return this.booksHomeApi.getFeatureBooks().pipe(
      tap(books => this.featureBooksStore.set(books))
    );
  }

  getLatestBooks(categoryId: string) {
    return this.booksHomeApi.getLatestBooks(categoryId).pipe(
      tap(books => this.latestBooksStore.set(books))
    );
  }
}
