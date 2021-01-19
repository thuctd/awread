import { Injectable } from '@angular/core';
import { CategoryGear } from '../gears';
import { CategoriesQuery } from '../states/categories';

@Injectable({ providedIn: 'root' })
export class CategoryFacade {
  constructor(
    private categoryGear: CategoryGear,
    private categoryQuery: CategoriesQuery
  ) {}

  selectAllCategoriesAkita() {
    return this.categoryQuery.selectAll();
  }

  getAllCategories() {
    return this.categoryGear.getAllCategories();
  }
}
