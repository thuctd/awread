import { Router } from '@angular/router';
import { TransformBookDataGear } from './transform-book-data.gear';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { createBookObject } from '../models';
import { FirebaseFirestoreAddon } from '../addons';
import { BooksApi } from '../apis';
import { BooksStore } from '../states/books';
import { SnackbarService } from '@awread/global/packages';
@Injectable({ providedIn: 'root' })
export class BooksGear {
  constructor(
    private booksApi: BooksApi,
    private booksStore: BooksStore,
    private firebaseFirestoreAddon: FirebaseFirestoreAddon,
    private transformBookDataGear: TransformBookDataGear,
    private router: Router,
    private snackbarService: SnackbarService
  ) { }

  updateBookByIdInAkita(id: string, book) {
    return this.booksStore.updateBookById(id, book);
  }

  getAllBooks() {
    return this.booksApi.getAllBooks().pipe(
      tap((res) => {
        if (
          res['data'] &&
          res['data']['allBooks'] &&
          res['data']['allBooks']['nodes'].length
        ) {
          const result = res['data']['allBooks']['nodes'];
          const books = result.map((book) =>
            this.transformBookDataGear.tranformBookData(book)
          );
          this.booksStore.set(books);
        }
      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

  getDetailBook(bookId: string) {
    return this.booksApi.getDetailBook(bookId).pipe(
      tap((res) => console.log('detail books: ', res)),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

  addBook(book) {
    const bookid = this.firebaseFirestoreAddon.createId();
    const genres = book.genres.map((genre) => ({
      name: genre.name,
      genreid: genre.genreid ?? this.firebaseFirestoreAddon.createId(),
    }));
    const bookNew = createBookObject({ ...book, bookid });
    return this.booksApi.createBook(bookNew, genres).pipe(
      tap((res) => {
        console.log('add book res: ', res);
        if (res['data'] && res['data']['createBook']['book']) {
          this.snackbarService.showSuccess(
            'Thêm thông tin truyện thành công!'
          );
          this.booksStore.addBook(bookNew);
          this.router.navigate(['detail', { bookId: bookid, type: 'edit' }]);
        }
      }),
      catchError((err) => {
        this.snackbarService.showError('Đã xảy ra lỗi. Vui lòng thử lại!!');
        return throwError(err);
      })
    );
  }

  editBook(book, idsGenresRemove: string[]) {
    // const idsGenresAddNew = idsGenresAdd.map((item) => ({
    //   genreid: this.firebaseFirestoreAddon.createId(),
    //   name: item,
    // }));
    return this.booksApi.editBook(book, idsGenresRemove).pipe(
      tap((res) => {
        if (
          res &&
          res['data'] &&
          res['data']['updateBookByBookid']['book']['bookid']
        ) {
          this.updateBookByIdInAkita(book.bookid, book);
        }
        this.snackbarService.showSuccess('Cập nhật truyện thành công!');
      }),
      catchError((err) => {
        this.snackbarService.showError('Đã xảy ra lỗi. Vui lòng thử lại!!');
        return throwError(err);
      })
    );
  }

  updateBookStatus(bookId: string, status: string) {
    return this.booksApi.updateBookStatus(bookId, status).pipe(
      tap((res) => {
        console.log('update status books: ', res);
        this.snackbarService.showSuccess('Cập nhật trạng thái thành công!');
      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        this.snackbarService.showError('Đã xảy ra lỗi. Vui lòng thử lại!!');
        return throwError(err);
      })
    );
  }

  removeBook(bookId: string) {
    return this.booksApi.removeBook(bookId).pipe(
      tap((res) => {
        if (res) {
          this.booksStore.remove(bookId);
        }
        this.snackbarService.showSuccess('Xóa truyện thành công!');
      }),
      catchError((err) => {
        this.snackbarService.showError('Đã xảy ra lỗi. Vui lòng thử lại!!');
        return throwError(err);
      })
    );
  }

  updateTotalChapterPublishedAkita(bookid: string, num = 1) {
    return this.booksStore.updateTotalChapterPublished(bookid, num);
  }
}
