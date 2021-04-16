import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { BooksStore, BooksState } from './books.store';
import { of } from 'rxjs';
// import { BooksStore, BooksState, BooksUIState } from './books.store';

@Injectable({ providedIn: 'root' })
export class BooksQuery extends QueryEntity<BooksState> {
  // ui: EntityUIQuery<BooksUIState>;
  isLoading$ = this.selectLoading();
  bookList$ = this.selectAll();
  constructor(protected store: BooksStore) {
    super(store);
    // this.createUIQuery();
  }

  getBookById(id: string) {
    return this.getEntity(id);
  }

  selectEnityChapterBookById(id: string) {
    if (id) {
      return this.selectEntity(id, (e: any) => {
        return e.chaptersByBookid['data'];
      });
    }
    return of([]);
  }
}
