import { Injectable } from '@angular/core';
import { CreationsApi } from '../apis';

@Injectable({ providedIn: 'root' })
export class CreationsGear {

  constructor(
    private creationsApi: CreationsApi,
  ) {
  }

  get() {
    return this.creationsApi.get();
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
