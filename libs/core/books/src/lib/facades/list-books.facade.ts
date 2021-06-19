import { BooksQuery } from './../states/books/books.query';
import { Injectable } from '@angular/core';
import { ListBooksGear } from '../gears';

@Injectable({ providedIn: 'root' })
export class ListBooksFacade {

  constructor(
    public booksQuery: BooksQuery,
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

  getCategoryBookByCursor(categoryId, action?) {
    return this.listBooksGear.getCategoryBookByCursor(categoryId, action);
  }

  getAuthorBookByCursor(authors, action?) {
    return this.listBooksGear.getAuthorBookByCursor(authors, action);
  }

  getFilterBookCategoryByCursor(categoryId, action?) {
    return this.listBooksGear.getFilterBookCategoryByCursor(this.booksQuery.getCurrentFilter(), categoryId, action);
  }

}
