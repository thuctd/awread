import { Injectable } from '@angular/core';
import { ListBooksGear } from '../gears';

@Injectable({ providedIn: 'root' })
export class ListBooksFacade {

  constructor(
    private listBooksGear: ListBooksGear,
  ) {
  }

  getLatestBookByCursor(action?) {
    return this.listBooksGear.getLatestBookByCursor(action);
  }

}
