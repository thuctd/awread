import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CategoryApi } from '../apis/category.api';
import { Category } from '../models';
import { CategoriesStore } from '../states/categories';

@Injectable({ providedIn: 'root' })
export class CategoryGear {
  baseUrl = 'http://localhost:3000/categories';

  constructor(
    private categoryApi: CategoryApi,
    private categoriesStore: CategoriesStore
  ) {
  }

  getAllCategories() {
    return this.categoryApi.getAllCategories().pipe(
      tap((res) => {
        console.log('categories: ', res);
        this.categoriesStore.set(res);
      })
    );
  }

  getCategoryById(categoryId: string) {
    return this.categoryApi.getCategoryById(categoryId).pipe(
      tap((category) => console.log('detail books: ', category)),
      tap((category) => this.categoriesStore.add(category)), // book lấy về thì thêm vào store
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

}
