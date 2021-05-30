import { Injectable } from '@angular/core';
import { CreationsGear } from '../gears';
import { CreationsQuery, CreationsService } from '../states/creations';

@Injectable({ providedIn: 'root' })
export class CreationsFacade {
  creations$ = this.creationsQuery.selectAll();
  loading$ = this.creationsQuery.selectLoading();
  constructor(
    private creationsGear: CreationsGear,
    private creationsQuery: CreationsQuery,
    private creationsService: CreationsService,
  ) {
  }

  get() {
    return this.creationsGear.get();
  }

  selectEntity(bookId) {
    return this.creationsGear.selectEntity(bookId);
  }

  add(book) {
    return this.creationsGear.add(book).pipe();
  }
  edit(book, idsGenresRemove: string[]) {
    return this.creationsGear.edit(book, idsGenresRemove).pipe();
  }

}
