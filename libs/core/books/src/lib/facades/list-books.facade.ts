import { Injectable } from '@angular/core';
import { ListBooksGear } from '../gears';

@Injectable({ providedIn: 'root' })
export class ListBooksFacade {

  constructor(
    private listBooksGear: ListBooksGear,
  ) {
  }

  getTopBookByCursor(action?) {
    return this.listBooksGear.getTopBookByCursor(action);
  }

  getGoodBookByCursor(action?) {
    return this.listBooksGear.getGoodBookByCursor(action);
  }

  getLatestBookByCursor(action?) {
    return this.listBooksGear.getLatestBookByCursor(action);
  }

  getFeaturetBookByCursor(action?) {
    return this.listBooksGear.getFeaturetBookByCursor(action);
  }

}
