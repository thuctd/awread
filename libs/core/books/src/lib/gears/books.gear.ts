import { SearchBooksStore } from './../states/search-books/search-books.store';
import { TopBooksStore } from './../states/top-books/top-books.store';
import { AuthorBooksStore } from './../states/author-books/author-books.store';
import { GenreBooksStore } from './../states/genre-books/genre-books.store';
import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { BooksApi } from '../apis';
import { BooksStore } from '../states/books';

import { CategoryBooksStore } from '../states/category-books';

@Injectable({ providedIn: 'root' })
export class BooksGear {

  constructor(
    private categoryBooksStore: CategoryBooksStore,
    private searchBooksStore: SearchBooksStore,
    private authorBooksStore: AuthorBooksStore,
    private genreBooksStore: GenreBooksStore,
    private topBooksStore: TopBooksStore,
    private booksStore: BooksStore,
    private booksApi: BooksApi,
  ) { }

  getCategoryBooks(categoryId: string = '', limit: number = 9) {
    this.categoryBooksStore.setLoading(true);
    let hasMore, total;
    return this.booksApi.getCategoryBooks(categoryId, limit).pipe(
      tap(books => this.categoryBooksStore.add(books)),
      tap(() => this.categoryBooksStore.updatePage({ hasMore: true, sizePage: limit, total: 999 })),
      tap(() => this.categoryBooksStore.setLoading(false))
    );
  }

  getAuthorBooks(authors) {
    const isCheck = typeof (authors);
    let authorIds: string[];
    if (isCheck === 'string') {
      authorIds = authors.split();
    } else {
      authorIds = Object.keys(authors ?? {});
    }
    this.authorBooksStore.setLoading(true);
    return this.booksApi.getAuthorBooks(authorIds).pipe(
      tap(books => this.authorBooksStore.set(books)),
      tap(() => this.authorBooksStore.setLoading(false))
    );
  }

  getGenreBooks(genreId: string) {
    this.genreBooksStore.setLoading(true);
    return this.booksApi.getGenreBooks(genreId).pipe(
      map((books) => {
        return books;
      }),
      tap(books => this.genreBooksStore.set(books)),
      tap(() => this.genreBooksStore.setLoading(false)),
    );
  }

  getBookById(bookId: string) {
    return this.booksApi.getBookById(bookId);
  }

  getTopBooks(limit?: number) {
    let hasMore, total;
    this.topBooksStore.setLoading(true);
    return this.booksApi.getTopBooks(limit).pipe(
      map(res => {
        hasMore = res?.['data']?.['allMvMostViewBooks']?.['pageInfo']?.hasNextPage;
        total = res?.['data']?.['allMvMostViewBooks']?.totalCount;
        this.topBooksStore.add(res?.['data']?.['allMvMostViewBooks']?.['nodes']);
      }),
      tap(() => this.topBooksStore.updatePage({ hasMore: hasMore, sizePage: limit, total: total })),
      tap(() => this.topBooksStore.setLoading(false))
    );
  }

  getFilterBooks(filters, categoryId: string) {
    return this.booksApi.getFilterBooks(filters, categoryId).pipe(
      tap(books => this.categoryBooksStore.set(books)),
    );;
  }

  searhBookByTermApi(term: string) {
    this.searchBooksStore.setLoading(true);
    return this.booksApi.searchBookByTerm(term).pipe(
      tap(books => this.searchBooksStore.set(books)),
      tap(() => this.searchBooksStore.setLoading(false))
    );
  }
}
