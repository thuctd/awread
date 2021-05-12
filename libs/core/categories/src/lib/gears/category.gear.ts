import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { CategoryApi } from '../apis/category.api';
import { CategoriesStore } from '../states/categories';

@Injectable({ providedIn: 'root' })
export class CategoryGear {
  constructor(private categoryApi: CategoryApi, private categoriesStore: CategoriesStore) { }

  getAllCategories() {
    return this.categoryApi.getAllCategories().pipe(
      map((result) => this.categoriesStore.set(result))
    );
  }

  getCategoryById(categoryId: string) {
    return this.categoryApi.getCategoryById(categoryId).pipe(
      tap((res) => { }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }
}
