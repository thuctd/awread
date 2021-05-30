import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
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
    return this.creationsApi.getOne(bookId).pipe(
      map(book => ({
        book,
        genreIds: book?.['booksGenresByBookId']?.['nodes'] ? book?.['booksGenresByBookId']?.['nodes'].map(result => (result.genreId)) : [],
        authors: book?.['authorsByBookId']?.['nodes'] ? book?.['authorsByBookId']?.['nodes'].map(result => ({ userId: result.userId, name: result.userByUserId.name })) : []
      }))
    );
  }

  add(book) {
    return this.creationsApi.add(book).pipe();
  }
  edit(book, idsGenresRemove: string[]) {
    return this.creationsApi.edit(book).pipe();
  }


}
