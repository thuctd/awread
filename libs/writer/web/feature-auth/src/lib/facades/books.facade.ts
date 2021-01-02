import { BooksQuery } from './../states/books/books.query';
import { tap, catchError } from 'rxjs/operators';
import { BooksStore } from './../states/books/books.store';
import { BooksGear } from './../gears/books.gear';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BooksFacade {
  bookList$ = this.booksQuery.selectAll();
  constructor(
    private booksGear: BooksGear,
    private booksStore: BooksStore,
    private booksQuery: BooksQuery
  ) {}

  setBookIdActive(bookid: string) {
    return this.booksStore.setActive(bookid);
  }

  getBookIdActive() {
    return this.booksQuery.getActiveId();
  }

  selectEntityChapterBookById(id: string): any {
    return this.booksQuery.selectEnityChapterBookById(id);
  }

  getBookByIdStore(id: string) {
    return this.booksQuery.getBookById(id);
  }

  updateBookByIdStore(id: string, book) {
    return this.booksStore.updateBookById(id, book);
  }

  getAllBooks() {
    return this.booksGear.getAllBooks().pipe(
      tap((res) => {
        if (
          res['data'] &&
          res['data']['allBooks'] &&
          res['data']['allBooks']['nodes'].length
        ) {
          const result = res['data']['allBooks']['nodes'];
          const books = result.map((book) => this.tranformBookData(book));
          this.booksStore.set(books);
        }
      })
    );
  }

  addBook(book) {
    return this.booksGear.addBook(book).pipe(
      tap((res) => {
        console.log('add book res: ', res);
        if (res['data'] && res['data']['createBook']['book']) {
          const bookEntity = this.tranformBookData(
            res['data']['createBook']['book']
          );
          this.booksStore.addBook(bookEntity);
        }
      }),
      catchError((err) => {
        alert('create lỗi rồi nhé babe!');
        return of(err);
      })
    );
  }

  editBook(book) {
    return this.booksGear.editBook(book).pipe(
      tap((res) => {
        if (
          res &&
          res['data'] &&
          res['data']['updateBookByBookid']['book']['bookid']
        ) {
          this.updateBookByIdStore(book.bookid, book);
        }
      }),
      catchError((err) => {
        alert('update lỗi rồi nhé babe!');
        return of(err);
      })
    );
  }

  updateBookStatus(bookId: string, status: string) {
    return this.booksGear.updateBookStatus(bookId, status);
  }

  removeBook(bookId: string) {
    return this.booksGear.removeBook(bookId).pipe(
      tap((res) => {
        if (res) {
          this.booksStore.remove(bookId);
        }
      }),
      catchError((err) => {
        alert('Xoa book loi roi nhé babe!');
        return of(err);
      })
    );
  }

  private tranformBookData(book) {
    const totalCountPublished =
      book.chaptersByBookid['nodes'].filter(
        (item) => item.status === 'PUBLISHED'
      ).length ?? 0;
    return {
      ...book,
      chaptersByBookid: {
        data: book.chaptersByBookid['nodes'] ?? [],
        totalCount: book.chaptersByBookid.totalCount,
        totalCountPublished,
      },
    };
  }
}
