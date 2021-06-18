import { BooksFacade } from '@awread/core/books';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { CreationsApi } from '../apis';
import { CreationsQuery, CreationsStore } from '../states/creations';
import { CurrentUserFacade } from '@awread/core/users';
import { SnackbarService } from '@awread/global/packages';
import { of } from 'rxjs';
import { Location } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class CreationsGear {
  constructor(
    private creationsApi: CreationsApi,
    private creationsStore: CreationsStore,
    private booksFacade: BooksFacade,
    private currentUserFacade: CurrentUserFacade,

    private SnackbarService: SnackbarService
  ) {}

  generateUuid() {
    return this.creationsApi.generateUuid();
  }

  get() {
    this.creationsStore.setLoading(true);
    return this.creationsApi.get(this.currentUserFacade.getUserId()).pipe(
      tap((value) => this.creationsStore.setLoading(false)),
      tap((value) => this.creationsStore.set(value))
    );
  }

  searchCreationByTerm(searchTerm: string) {
    this.booksFacade.setSearchBookLoading(true);
    return this.creationsApi.searchCreationByTerm(this.currentUserFacade.getUserId(), searchTerm).pipe(
      tap((value) => this.booksFacade.setSearchBookLoading(false)),
      tap((value) => this.booksFacade.setSearchBook(value))
    );
  }

  selectEntity(bookId) {
    return this.creationsApi.getOne(bookId).pipe(
      map((book) => {
        const authors = book?.['authorsByBookId']?.['nodes']
          ? book?.['authorsByBookId']?.['nodes'].map((result) => ({
              userId: result.userId,
              name: result.userByUserId.name,
            }))
          : [];
        return {
          book,
          genreIds: book?.['booksGenresByBookId']?.['nodes']
            ? book?.['booksGenresByBookId']?.['nodes'].map((result) => result.genreId)
            : [],
          authors: authors,
          authorIds: authors.map((result) => result.userId),
        };
      })
    );
  }

  create(book) {
    return this.creationsApi
      .create({
        ...book,
        userId: this.currentUserFacade.getUserId(),
        authorIds: [this.currentUserFacade.getUserId()],
      })
      .pipe(
        tap((result) => {
          if (result.errors) {
            result.errors.forEach((error) => this.SnackbarService.showError(error.message));
          } else {
            this.SnackbarService.showSuccess('Tạo truyện mới thành công');
          }
        })
      );
  }

  update(book) {
    return this.creationsApi
      .update({
        ...book,
        userId: this.currentUserFacade.getUserId(),
      })
      .pipe(
        tap((result) => {
          if (result.errors) {
            result.errors.forEach((error) => this.SnackbarService.showError(error.message));
          } else {
            this.SnackbarService.showSuccess('Lưu truyện thành công');
          }
        })
      );
  }

  publish(bookId) {
    return this.creationsApi.publish(bookId).pipe(
      tap((result) => {
        if (result.errors) {
          result.errors.forEach((error) => this.SnackbarService.showError(error.message));
        } else {
          this.SnackbarService.showSuccess('Xuất bản truyện thành công, cần 5 phút để cập nhật lên awread.vn');
        }
      })
    );
  }

  delete(bookId) {
    return this.creationsApi.delete(bookId).pipe(
      tap((result) => {
        if (result.errors) {
          result.errors.forEach((error) => this.SnackbarService.showError(error.message));
        } else {
          this.SnackbarService.showSuccess('Đã xóa truyện');
        }
      })
    );
  }
}
