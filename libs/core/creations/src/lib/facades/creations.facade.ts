import { SearchCreationsStore, SearchCreationsQuery } from './../states/search-creations';
import { Injectable } from '@angular/core';
import { CreationsGear } from '../gears';
import { CreationsQuery, CreationsService } from '../states/creations';

@Injectable({ providedIn: 'root' })
export class CreationsFacade {
  creations$ = this.creationsQuery.selectAll();
  loading$ = this.creationsQuery.selectLoading();
  constructor(
    private creationsGear: CreationsGear,
    public creationsQuery: CreationsQuery,
    public searchCreationsQuery: SearchCreationsQuery,
    private searchCreationsStore: SearchCreationsStore,
    private creationsService: CreationsService,
  ) {
  }

  generateUuid() {
    return this.creationsGear.generateUuid();
  }


  get() {
    return this.creationsGear.get();
  }

  selectEntity(bookId) {
    return this.creationsGear.selectEntity(bookId);
  }

  create(book) {
    return this.creationsGear.create(book);
  }

  publish(bookId) {
    return this.creationsGear.publish(bookId);
  }

  update(book) {
    return this.creationsGear.update(book);
  }

  delete(bookId) {
    return this.creationsGear.delete(bookId);
  }

  getFilterBooks() {
    return this.creationsGear.getFilterBooks(this.creationsQuery.getCurrentFilter());
  }

  searchCreationByTerm(searchTerm: string) {
    if (searchTerm === '') {
      return this.creationsGear.get();
    } else {
      return this.creationsGear.searchCreationByTerm(searchTerm);
    }
  }

  updateSearchTerm(searchTerm: string) {
    this.searchCreationsStore.update({ searchTerm });
  }
}
