import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CategoryApi {
  constructor(private apollo: Apollo) { }

  allCategories() {
    return this.apollo.query({
      query: gql`
        query allCategories {
          allCategories {
            nodes {
              categoryId
              name
            }
          }
        }
      `,
    }).pipe(
      map(res => res.data?.['allCategories']?.['nodes'])
    )
  }
}
