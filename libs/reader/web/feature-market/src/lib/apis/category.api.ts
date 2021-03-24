import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { tap } from 'rxjs/operators';
import { Category } from '../models';

@Injectable({ providedIn: 'root' })
export class CategoryApi {
  constructor(private apollo: Apollo) { }

  get() { }
}
