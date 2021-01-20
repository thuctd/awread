import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CategoryApi } from '../apis';
import { CategoriesStore } from '../states/categories';

@Injectable({ providedIn: 'root' })
export class CategoryGear {
  constructor(
    private categoryApi: CategoryApi,
    private categoriesStore: CategoriesStore
  ) {}

  getAllCategories() {
    return this.categoryApi.getAllCategories().pipe(
      tap((res) => {
        console.log('ctaegories: ', res);
        if (res['data'] && res['data']['allCategories']['nodes'].length) {
          this.categoriesStore.set(res['data']['allCategories']['nodes']);
        }
      })
    );
  }
}
