import { Injectable } from '@angular/core';
import { AuthorGear } from '../gears';
import { AuthorQuery, AuthorStore } from '../states/author';

@Injectable({ providedIn: 'root' })
export class AuthorFacade {

  constructor(
    private authorGear: AuthorGear,
    private authorStore: AuthorStore,
    private authorQuery: AuthorQuery
  ) {
  }

  selectLoadingAkiata() {
    return this.authorQuery.selectLoading();
  }

  setLoading(isLoading = false) {
    this.authorStore.setLoading(isLoading);
  }

  setAuthorIdActiveAkita(authorId: string) {
    return this.authorStore.setActive(authorId);
  }

  getAuthorIdActiveAkita() {
    return this.authorQuery.getActiveId();
  }

  selectEntityAuthor(id: string) {
    return this.authorQuery.selectEntity(id);
  }

  getAuthorById(authorId: string) {
    return this.authorGear.getAuthorById(authorId);
  }

  getBoooksByAuthorId(authorId: string) {
    return this.authorGear.getBooksByAuthorId(authorId);
  }

}
