import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({ providedIn: 'root' })
export class CategoryApi {
  constructor(private apollo: Apollo) {}

  getAllCategories() {
    return this.apollo.query({
      query: gql`
        query getAllCategories {
          allCategories {
            nodes {
              name
              categoryid
              description
            }
          }
        }
      `,
    });
  }
}
