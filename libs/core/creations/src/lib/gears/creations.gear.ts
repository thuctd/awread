import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CreationsApi } from '../apis';
import { CreationsStore } from '../states/creations';
import { CurrentUserFacade } from '@awread/core/users';
@Injectable({ providedIn: 'root' })
export class CreationsGear {

  constructor(
    private creationsApi: CreationsApi,
    private creationsStore: CreationsStore,
    private currentUserFacade: CurrentUserFacade,
  ) {
  }

  get() {
    this.creationsStore.setLoading(true);
    return this.creationsApi.get(this.currentUserFacade.getUserId())
      .pipe(
        tap(value => this.creationsStore.setLoading(false)),
        tap(value => this.creationsStore.set(value))
      )
  }

  getDetail(bookId: string) {
    return this.creationsApi.getDetail(bookId);
  }

  add(book) {
    return this.creationsApi.add(book).pipe();
  }
  edit(book, idsGenresRemove: string[]) {
    return this.creationsApi.edit(book).pipe();
  }

  updateStatus(bookId: string, status: string) {
    return this.creationsApi.updateStatus(bookId, status);
  }

  remove(bookId: string) {
    return this.creationsApi.remove(bookId).pipe();
  }

}
