import { Injectable } from '@angular/core';
import { AuthorGear } from '../gears/author.gear';
import { AuthorsQuery, AuthorsStore } from '../states/authors';

@Injectable({ providedIn: 'root' })
export class AuthorFacade {

  constructor(
    private authorGear: AuthorGear,
    private authorStore: AuthorsStore,
    private authorQuery: AuthorsQuery
  ) {
  }

  selectLoadingAkita() {
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

  getAuthors() {
    return this.authorGear.getAuthors();
  }

  getDetailAuthor(userId: string) {
    return this.authorGear.getDetailAuthor(userId);
  }

}
