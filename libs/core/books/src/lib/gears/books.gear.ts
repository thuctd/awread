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
    return this.booksApi.getCategoryBooks(categoryId, limit).pipe(
      tap((res) => this.categoryBooksStore.set(res)),
      tap(() => this.categoryBooksStore.setLoading(false))
    );
  }

  getAuthorBooks(authors, limit: number = 12) {
    const isCheck = typeof (authors);
    let authorIds: string[];
    let hasNextPage, totalCount;
    if (isCheck === 'string') {
      authorIds = authors.split();
    } else {
      authorIds = Object.keys(authors ?? {});
    }
    this.authorBooksStore.setLoading(true);
    return this.booksApi.getAuthorBooks(authorIds, limit).pipe(
      map((res) => {
        hasNextPage = res?.['data']?.['allMvBooksLatestChapters']?.['pageInfo']?.hasNextPage;
        totalCount = res?.['data']?.['allMvBooksLatestChapters']?.totalCount;
        return res?.['data']?.['allMvBooksLatestChapters']?.['nodes'];
      }),
      tap(books => this.authorBooksStore.set(books)),
      tap(() => this.authorBooksStore.updatePage({ hasNextPage: hasNextPage, totalCount: totalCount, sizePage: limit })),
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

  getTopBooks(limit: number = 12) {
    let hasNextPage, totalCount;
    this.topBooksStore.setLoading(true);
    return this.booksApi.getTopBooks(limit).pipe(
      map(res => {
        hasNextPage = res?.['data']?.['allMvMostViewBooks']?.['pageInfo']?.hasNextPage;
        totalCount = res?.['data']?.['allMvMostViewBooks']?.totalCount;
        this.topBooksStore.add(res?.['data']?.['allMvMostViewBooks']?.['nodes']);
      }),
      tap(() => this.topBooksStore.updatePage({ hasNextPage: hasNextPage, sizePage: limit, totalCount: totalCount })),
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
