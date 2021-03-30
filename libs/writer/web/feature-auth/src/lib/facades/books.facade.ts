import { Injectable } from '@angular/core';
import { BooksGear } from '../gears';
import { BooksStore, BooksQuery } from '../states/books';

@Injectable({ providedIn: 'root' })
export class BooksFacade {
  bookList$ = this.booksQuery.selectAll();
  constructor(
    private booksGear: BooksGear,
    private booksStore: BooksStore,
    private booksQuery: BooksQuery
  ) { }

  selectLoadingAkita() {
    return this.booksQuery.selectLoading();
  }

  setLoading(isLoading = false) {
    this.booksStore.setLoading(isLoading);
  }

  setBookIdActiveAkita(bookid: string) {
    return this.booksStore.setActive(bookid);
  }

  getGenreIdsByBookIdAkita(bookid: string): string[] {
    return this.booksQuery.getEntity(bookid)?.genreIds ?? [];
  }

  getBookIdActiveAkita() {
    return this.booksQuery.getActiveId();
  }

  // selectEntityChapterBookById(id: string): any {
  //   return this.booksQuery.selectEnityChapterBookById(id);
  // }

  getBookByIdInAkita(id: string) {
    return this.booksQuery.getBookById(id);
  }

  selectEntityBook(id: string) {
    return this.booksQuery.selectEntity(id);
  }

  getAllBooks() {
    return this.booksGear.getAllBooks();
  }
  // setBooksInAkita() {
  //   return this.getAllBooks().pipe(
  //     tap((res) => {
  //       if (
  //         res['data'] &&
  //         res['data']['allBooks'] &&
  //         res['data']['allBooks']['nodes'].length
  //       ) {
  //         const result = res['data']['allBooks']['nodes'];
  //         const books = result.map((book) => this.tranformBookData(book));
  //         this.booksStore.set(books);
  //       }
  //     })
  //   );
  // }

  getDetailBook(bookId: string) {
    return this.booksGear.getDetailBook(bookId);
  }

  addBook(book) {
    return this.booksGear.addBook(book).pipe();
  }
  editBook(book, idsGenresRemove: string[]) {
    return this.booksGear.editBook(book, idsGenresRemove).pipe();
  }

  updateBookStatus(bookId: string, status: string) {
    return this.booksGear.updateBookStatus(bookId, status);
  }

  removeBook(bookId: string) {
    return this.booksGear.removeBook(bookId).pipe();
  }
}
