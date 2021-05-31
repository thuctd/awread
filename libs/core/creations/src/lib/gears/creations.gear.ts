import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { CreationsApi } from '../apis';
import { CreationsQuery, CreationsStore } from '../states/creations';
import { CurrentUserFacade } from '@awread/core/users';
import { SnackbarService } from '@awread/global/packages';
import { of } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class CreationsGear {

  constructor(
    private creationsApi: CreationsApi,
    private creationsStore: CreationsStore,
    private currentUserFacade: CurrentUserFacade,
    private creationsQuery: CreationsQuery,
    private SnackbarService: SnackbarService,
  ) {
  }

  generateUuid() {
    return this.creationsApi.generateUuid();
  }

  get() {
    this.creationsStore.setLoading(true);
    return this.creationsApi.get(this.currentUserFacade.getUserId())
      .pipe(
        tap(value => this.creationsStore.setLoading(false)),
        tap(value => this.creationsStore.set(value))
      )
  }

  selectEntity(bookId) {
    return this.creationsApi.getOne(bookId).pipe(
      map(book => {
        const authors = book?.['authorsByBookId']?.['nodes'] ? book?.['authorsByBookId']?.['nodes'].map(result => ({ userId: result.userId, name: result.userByUserId.name })) : [];
        return {
          book,
          genreIds: book?.['booksGenresByBookId']?.['nodes'] ? book?.['booksGenresByBookId']?.['nodes'].map(result => (result.genreId)) : [],
          authors: authors,
          authorIds: authors.map(result => (result.userId))
        };
      })
    );
  }

  create(book) {
    return this.creationsApi.create({
      ...book,
      userId: this.currentUserFacade.getUserId(),
      authorIds: [this.currentUserFacade.getUserId()]
    })
      .pipe(
        tap(result => {
          if (result.errors) {
            result.errors.forEach(error => this.SnackbarService.showError(error.message));
          } else {
            this.SnackbarService.showSuccess('Tạo truyện mới thành công');
          }
        })
      )
  }
  update(book) {
    return this.creationsApi.update({
      ...book,
      userId: this.currentUserFacade.getUserId(),
    })
      .pipe(
        tap(result => {
          if (result.errors) {
            result.errors.forEach(error => this.SnackbarService.showError(error.message));
          } else {
            this.SnackbarService.showSuccess('Lưu truyện thành công');
          }
        })
      )
  }

  delete(bookId) {
    return this.creationsApi.delete(bookId)
      .pipe(
        tap(result => {
          if (result.errors) {
            result.errors.forEach(error => this.SnackbarService.showError(error.message));
          } else {
            this.SnackbarService.showSuccess('Đã xóa truyện');
          }
        })
      )
  }


}
