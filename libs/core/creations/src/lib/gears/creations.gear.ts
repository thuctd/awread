import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CreationsApi } from '../apis';
import { CreationsQuery, CreationsStore } from '../states/creations';
import { CurrentUserFacade } from '@awread/core/users';
@Injectable({ providedIn: 'root' })
export class CreationsGear {

  constructor(
    private creationsApi: CreationsApi,
    private creationsStore: CreationsStore,
    private currentUserFacade: CurrentUserFacade,
    private creationsQuery: CreationsQuery,
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

  selectEntity(bookId) {
    if (this.creationsQuery.hasEntity(bookId)) {
      return this.creationsQuery.selectEntity(bookId);
    } else {
      return this.creationsApi.getOne(bookId);
    }
  }

  add(book) {
    return this.creationsApi.add(book).pipe();
  }
  edit(book, idsGenresRemove: string[]) {
    return this.creationsApi.edit(book).pipe();
  }


}
