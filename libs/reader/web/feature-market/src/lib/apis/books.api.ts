import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BooksApi {
  constructor(private apollo: Apollo) { }

  get() { }
}
