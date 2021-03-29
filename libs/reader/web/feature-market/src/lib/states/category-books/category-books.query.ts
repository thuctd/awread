import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CategoryBooksStore, CategoryBooksState } from './category-books.store';
// import { CategoryBooksStore, CategoryBooksState, CategoryBooksUIState } from './category-books.store';

@Injectable({ providedIn: 'root' })
export class CategoryBooksQuery extends QueryEntity<CategoryBooksState> {
  categoryBookList$ = this.selectAll();
  // ui: EntityUIQuery<CategoryBooksUIState>;
  constructor(protected store: CategoryBooksStore) {
    super(store);
    // this.createUIQuery();
  }

}
