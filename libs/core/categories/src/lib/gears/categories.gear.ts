import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { CategoriesApi } from '../apis/categories.api';
import { CategoriesStore } from '../states/categories';

@Injectable({ providedIn: 'root' })
export class CategoriesGear {
  constructor(private categoryApi: CategoriesApi, private categoriesStore: CategoriesStore) { }

  getAllCategories() {
    return this.categoryApi.getAllCategories().pipe(
      map((result) => this.categoriesStore.set(result))
    );
  }

  getCategoryById(categoryId: string) {
    return this.categoryApi.getCategoryById(categoryId).pipe(
      map((category) => {
        return category;
      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }
}
