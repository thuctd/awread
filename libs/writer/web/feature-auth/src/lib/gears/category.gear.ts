import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CategoryApi } from '../apis';
import { CategoriesStore } from '../states/categories';

@Injectable({ providedIn: 'root' })
export class CategoryGear {
  constructor(
    private categoryApi: CategoryApi,
    private categoriesStore: CategoriesStore
  ) { }

  getAllCategories() {
    return this.categoryApi.allCategories().pipe(
      tap((result) => {
        console.log('result: ', result);
        this.categoriesStore.set(result);
      })
    ).subscribe();
  }
}
