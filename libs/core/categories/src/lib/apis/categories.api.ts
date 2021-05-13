import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CategoriesApi {
  constructor(private apollo: Apollo) { }

  get() { }

  getAllCategories() {
    return this.apollo.query({
      query: gql`
        query Categories {
          allCategories {
            nodes {
              categoryId
              name
            }
          }
        }
      `,
    }).pipe(
      map(res => res?.['data']?.['allCategories']?.['nodes'])
    );
  }

  getCategoryById(categoryId: string) {
    return this.apollo.query({
      query: gql`
        query Categories($categoryId: BigFloat!) {
          allCategories(condition: { categoryId: $categoryId }) {
            nodes {
              categoryId
              name
              booksByCategoryId {
                nodes {
                  bookId
                  title
                  description
                  published
                  updatedAt
                  completed
                }
              }
            }
          }
        }
      `,
      variables: {
        categoryId,
      },
    }).pipe(
      map(res => res?.['data']?.['allCategories']?.['nodes'])
    );;
  }
}
