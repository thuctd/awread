import { Injectable } from '@angular/core';
import { Apollo, gql } from "apollo-angular";
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ListBooksApi {

  constructor(
    private apollo: Apollo
  ) { }


  getLatestBookByCursor(after: string | undefined = undefined, first = 10) {
    return this.apollo
      .query({
        query: gql`
          query allMvBooksLatestChapters ($after: Cursor, $first: Int) {
            allMvBooksLatestChapters(
              first: $first
              after: $after
              condition: {
                published: true
                isDeleted: false
              }
            ) {
              nodes {
                bookId
                categoryId
                newestChapters
                title
                updatedAt
                authors
                cover
              }
              pageInfo {
                endCursor
                hasNextPage
              }
              totalCount
            }
          }
        `,
        variables: {
          after,
          first,
        },
      })
      .pipe(
        map(res => res?.['data']?.['allMvBooksLatestChapters']));
  }

}
