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
    this.booksStore.setLoading(true);
    return this.booksApi.getCategoryBooks(categoryId).pipe(
      tap(books => this.categoryBooksStore.set(books)),
      tap(books => this.booksStore.setLoading(false))
    );
  }

  getAuthorBooks(authors) {
    const authorIds = Object.keys(authors ?? {});
    return this.booksApi.getAuthorBooks(authorIds).pipe(
      tap(books => this.authorBooksStore.set(books))
    );
  }

  getGenreBooks(genreId: string) {
    return this.booksApi.getGenreBooks(genreId).pipe(
      map((books) => {
        return books;
      }),
      tap(books => this.genreBooksStore.set(books))
    );
  }

  getBookById(bookId: string) {
    return this.booksApi.getBookById(bookId)
  }

  getTopBooks() {
    return this.booksApi.getTopBooks().pipe(
      tap(books => this.topBooksStore.set(books))
    );
  }

  getFilterBooks(filters) {
    return this.booksApi.getFilterBooks(filters);
  }

  searhBookByTermApi(term: string) {
    return this.booksApi.searchBookByTerm(term).pipe(
      map((result) => result.map(book => {
        const categoryName = book['categoryByCategoryId'].name;
        return {
          ...book,
          categoryName
        };
      })),
      tap(books => this.searchBooksStore.set(books)));
  }

}
