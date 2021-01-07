import { FirestoreGear } from './../gears/firestore.gear';
import { BooksQuery } from './../states/books/books.query';
import { tap, catchError, map } from 'rxjs/operators';
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
    private booksQuery: BooksQuery,
    private firestoreGear: FirestoreGear
  ) {}

  setBookIdActiveAkita(bookid: string) {
    return this.booksStore.setActive(bookid);
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

  updateBookByIdInAkita(id: string, book) {
    return this.booksStore.updateBookById(id, book);
  }

  getAllBooks() {
    return this.booksGear.getAllBooks();
  }
  //TODO: cho vao booksGear
  setBooksInAkita() {
    return this.getAllBooks().pipe(
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

  getDetailBook(bookId: string) {
    return this.booksGear.getDetailBook(bookId);
  }
  //TODO: cho vao booksGear
  // nếu như dài quá 100 dòng, tạo hẳn 1 file mới tên là addBookGear
  addBook(book) {
    const bookid = this.firestoreGear.createId();
    const bookDetail = { ...book, bookid };
    return this.booksGear.addBook(bookDetail).pipe(
      tap((res) => {
        console.log('add book res: ', res);
        if (res['data'] && res['data']['createBook']['book']) {
          // const bookEntity = this.tranformBookData(
          //   res['data']['createBook']['book']
          // );
          this.booksStore.addBook(bookDetail);
        }
      }),
      //TODO: không catch error ở đây mà catch ở gear để còn alert hoặc ném toast
      catchError((err) => {
        alert('create lỗi rồi nhé babe!');
        //TODO: return throwError(err) chứ không phải return of (err) mình cần throw ra để xử lý tiếp
        return of(err);
      })
    );
  }
  //TODO: cho vao booksGear hoặc file mới tên là editBookGear
  editBook(book) {
    return this.booksGear.editBook(book).pipe(
      tap((res) => {
        if (
          res &&
          res['data'] &&
          res['data']['updateBookByBookid']['book']['bookid']
        ) {
          this.updateBookByIdInAkita(book.bookid, book);
        }
      }),
      //TODO: không catch error ở đây mà catch ở gear để còn alert hoặc ném toast
      catchError((err) => {
        alert('update lỗi rồi nhé babe!');
        //TODO: return throwError(err) chứ không phải return of (err) mình cần throw ra để xử lý tiếp
        return of(err);
      })
    );
  }

  updateBookStatus(bookId: string, status: string) {
    return this.booksGear.updateBookStatus(bookId, status);
  }

  removeBook(bookId: string) {
    return (
      this.booksGear
        .removeBook(bookId)
        //TODO: tất cả đoạn pipe này cho vào bên trong booksGear, không xử lý logic ở facade
        .pipe(
          tap((res) => {
            if (res) {
              this.booksStore.remove(bookId);
            }
          }),
          //TODO: không catch error ở đây mà catch ở gear để còn alert hoặc ném toast
          catchError((err) => {
            alert('Xoa book loi roi nhé babe!');
            //TODO: return throwError(err) chứ không phải return of (err) mình cần throw ra để xử lý tiếp
            return of(err);
          })
        )
    );
  }

  //TODO: hàm xử lý logic, nếu không thuộc file nào thì tạo 1 file mới tên là transform-book-data.gear.ts
  // facade không được xử lý logic code
  tranformBookData(book) {
    const totalCountPublished =
      book.chaptersByBookid['nodes'].filter(
        (item) => item.status === 'PUBLISHED'
      ).length ?? 0;
    const chapters = book.chaptersByBookid['nodes'].map((item, index) => ({
      ...item,
      chapterNumber: index + 1,
    }));
    return {
      ...book,
      chaptersByBookid: {
        data: chapters ?? [],
        totalCount: book.chaptersByBookid.totalCount,
        totalCountPublished,
      },
    };
  }
}
