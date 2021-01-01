import { BooksQuery } from './../states/books/books.query';
import { tap, map } from 'rxjs/operators';
import { BooksStore } from './../states/books/books.store';
import { BooksGear } from './../gears/books.gear';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BooksFacade {
  bookList$ = this.booksQuery.selectAll();
  constructor(
    private booksGear: BooksGear,
    private booksStore: BooksStore,
    private booksQuery: BooksQuery
  ) {}

  getAllBooks() {
    return this.booksGear.getAllBooks().pipe(
      tap((res) => {
        if (
          res['data'] &&
          res['data']['allBooks'] &&
          res['data']['allBooks']['nodes'].length
        ) {
          const result = res['data']['allBooks']['nodes'];
          const books = result.map((book) => {
            const totalCountPublished = book.chaptersByBookid['nodes'].filter(
              (item) => item.status === 'PUBLISHED'
            ).length;
            return {
              ...book,
              chaptersByBookid: {
                totalCount: book.chaptersByBookid.totalCount,
                totalCountPublished,
              },
            };
          });
          console.log('books: ', books);
          this.booksStore.set(books);
        }
      })
    );
  }

  addBook(book) {
    return this.booksGear.addBook(book);
  }

  editBook(book) {
    return this.booksGear.editBook(book);
  }

  updateBookStatus(bookId: string, status: string) {
    return this.booksGear.updateBookStatus(bookId, status);
  }

  removeBook(bookId: string) {
    return this.booksGear.removeBook(bookId);
  }
}
