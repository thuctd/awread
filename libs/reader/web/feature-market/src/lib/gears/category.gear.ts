import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CategoryApi } from '../apis/category.api';
import { CategoriesStore } from '../states/categories';

@Injectable({ providedIn: 'root' })
export class CategoryGear {

  constructor(
    private categoryApi: CategoryApi,
    private categoriesStore: CategoriesStore
  ) {
  }

  getAllCategories() {
    return this.categoryApi.getAllCategories().pipe(
      tap((res) => {
        console.log('categories: ', res);
        // this.categoriesStore.set(res);
      })
    );
  }

  getCategoryById(categoryId: string) {
    return this.categoryApi.getCategoryById(categoryId).pipe(
      tap((category) => console.log('detail category: ', category)),
      // tap((category) => this.categoriesStore.add(category)), // book lấy về thì thêm vào store
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

  getCategoryByType(type: string) {
    return this.categoryApi.getCategoryByType(type).pipe(
      // tap((category) => this.categoriesStore.add(category)), // book lấy về thì thêm vào store
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

}
