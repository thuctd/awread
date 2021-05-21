import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { CategoriesApi } from '../apis/categories.api';
import { CategoriesStore } from '../states/categories';

@Injectable({ providedIn: 'root' })
export class CategoriesGear {
  constructor(private categoryApi: CategoriesApi, private categoriesStore: CategoriesStore) { }

  getAllCategories() {
    this.categoriesStore.setLoading(true);
    return this.categoryApi.getAllCategories().pipe(
      map((result) => this.categoriesStore.set(result)),
      tap(() => { this.categoriesStore.setLoading(false) })
    );
  }

  getCategoryById(categoryId: string) {
    return this.categoryApi.getCategoryById(categoryId).pipe(
      map((category) => {
        return category;
      })
    );
  }
}
