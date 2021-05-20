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

  getCategoryBooks(categoryId?: string) {
    this.categoryBooksStore.setLoading(true);
    return this.booksApi.getCategoryBooks(categoryId).pipe(
      // map((result) => result.map(res => {
      //   const chapters = Object.keys(res['newestChapters']).map(
      //     key => console.log(res['newestChapters'][key], 'position')
      //   );
      // })),
      tap(books => this.categoryBooksStore.set(books)),
      tap(() => this.categoryBooksStore.setLoading(false))
    );
  }

  getAuthorBooks(authors) {
    const authorIds = Object.keys(authors ?? {});
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
    return this.booksApi.getBookById(bookId)
  }

  getTopBooks() {
    this.topBooksStore.setLoading(true);
    return this.booksApi.getTopBooks().pipe(
      tap(books => this.topBooksStore.set(books)),
      tap(() => this.topBooksStore.setLoading(false)),
    );
  }

  getFilterBooks(filters) {
    return this.booksApi.getFilterBooks(filters);
  }

  searhBookByTermApi(term: string) {
    this.searchBooksStore.setLoading(true);
    return this.booksApi.searchBookByTerm(term).pipe(
      tap(books => this.searchBooksStore.set(books)),
      tap(() => this.searchBooksStore.setLoading(false))
    );
  }
}
