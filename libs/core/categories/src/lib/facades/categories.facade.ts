import { Injectable } from '@angular/core';
import { CategoriesGear } from '../gears/categories.gear';
import { CategoriesQuery } from '../states/categories';

@Injectable({ providedIn: 'root' })
export class CategoriesFacade {
  categories$ = this.categoriesQuery.selectAll();

  constructor(
    private categoriesGear: CategoriesGear,
    private categoriesQuery: CategoriesQuery
  ) {
  }

  selectAllCategoriesAkita() {
    return this.categoriesQuery.selectAll();
  }

  getAllCategories() {
    return this.categoriesGear.getAllCategories();
  }

  getDetailCategory(categoryId: string) {
    return this.categoriesGear.getCategoryById(categoryId);
  }

}
