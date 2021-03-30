import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import db from './db.json';

@Injectable({ providedIn: 'root' })
export class CategoryApi {
  constructor(private apollo: Apollo) { }

  get() { }

  getAllCategories() {
    return of(db.categories)
      .pipe(delay(500));

  }

  getCategoryById(categoryId: string) {
    return of(db.categories.find(category => category.id === categoryId))
      .pipe(delay(500));
  }
}
