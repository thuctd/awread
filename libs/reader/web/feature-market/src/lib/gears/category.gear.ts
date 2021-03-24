import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CategoryApi } from '../apis/category.api';
import { Category } from '../models';
import { CategoriesStore } from '../states/categories';

@Injectable({ providedIn: 'root' })
export class CategoryGear {
  baseUrl = 'http://localhost:3000/categories';

  constructor(
    private http: HttpClient,
    private categoriesStore: CategoriesStore
  ) {
  }

  getAllCategories() {
    return this.http.get<Category[]>(`${this.baseUrl}`).pipe(
      tap((res) => {
        console.log('ctaegories: ', res);
        this.categoriesStore.set(res);
      })
    );
  }

}
