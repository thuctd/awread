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
    this.goodBooksStore.setLoading(true);
    return this.booksHomeApi.getGoodBooks().pipe(
      tap(books => this.goodBooksStore.set(books)),
      tap(() => this.goodBooksStore.setLoading(false))
    );
  }

  getFeatureBooks() {
    this.featureBooksStore.setLoading(true);
    return this.booksHomeApi.getFeatureBooks().pipe(
      tap(books => this.featureBooksStore.set(books)),
      tap(() => this.featureBooksStore.setLoading(false))
    );
  }

  getLatestBooks(categoryId: string) {
    this.latestBooksStore.setLoading(true);
    return this.booksHomeApi.getLatestBooks(categoryId).pipe(
      tap(books => this.latestBooksStore.set(books)),
      tap(() => this.latestBooksStore.setLoading(false))
    );
  }
}
