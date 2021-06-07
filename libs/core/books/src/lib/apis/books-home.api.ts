import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BooksHomeApi {
  constructor(private apollo: Apollo) { }

  getGoodBooks() {
    return this.apollo.query({
      query: gql`
        query allMvMostViewBooks {
          allMvMostViewBooks(first: 10, orderBy: VIEWS_DESC, condition: {published: true, isDeleted: false}) {
            nodes {
              bookId
              title
              categoryId
              newestChapters
              updatedAt
              views
              cover
            }
          }
        }
      `,
    })
      .pipe(
        map(res => res?.['data']?.['allMvMostViewBooks']?.['nodes'])
      );
  }

  getFeatureBooks(offset: number) {
    return this.apollo.query({
      query: gql`
        query allMvMostViewBooks($offset: Int) {
          allMvMostViewBooks(first: 6 offset: $offset condition: {published: true, isDeleted: false}) {
            nodes {
              bookId
              categoryId
              newestChapters
              title
              updatedAt
              cover
            }
            pageInfo {
              hasNextPage
            }
            totalCount
          }
        }
      `,
      variables: { offset }
    })
      .pipe()
  }

  getLatestBooks(categoryId: string, offset: number) {
    return this.apollo.query({
      query: gql`
          query allMvBooksLatestChapters ($offset: Int ${categoryId ? `,$categoryId: BigFloat` : ''}) {
            allMvBooksLatestChapters(
              first: 10,
              offset: $offset,
              orderBy: PUBLISHED_DESC,
              condition: {
                published: true,
                isDeleted: false ${categoryId ? `, 
                categoryId: $categoryId ` : ''
        }
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
                hasNextPage
              }
              totalCount
            }
          }
        `,
      variables: { categoryId, offset }
    }).pipe(
      delay(500)
    )
  }
}
