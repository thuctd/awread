import { Injectable } from '@angular/core';
import { CreationsGear } from '../gears';

@Injectable({ providedIn: 'root' })
export class CreationsFacade {

  constructor(
    private creationsGear: CreationsGear,
  ) {
  }

  get() {
    return this.creationsGear.get();
  }

  getDetail(bookId: string) {
    return this.creationsGear.getDetail(bookId);
  }

  add(book) {
    return this.creationsGear.add(book).pipe();
  }
  edit(book, idsGenresRemove: string[]) {
    return this.creationsGear.edit(book, idsGenresRemove).pipe();
  }

  updateStatus(bookId: string, status: string) {
    return this.creationsGear.updateStatus(bookId, status);
  }

  remove(bookId: string) {
    return this.creationsGear.remove(bookId).pipe();
  }

}
