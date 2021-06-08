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
    offset = offset * 6;
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
    let first = 10;
    if (window.innerWidth <= 768) {
        first = 6
        offset = offset * 6; 
    }
    return this.apollo.query({
      query: gql`
          query allMvBooksLatestChapters ($first: Int $offset: Int ${categoryId ? `,$categoryId: BigFloat` : ''}) {
            allMvBooksLatestChapters(
              first: $first,
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
      variables: { categoryId, offset, first }
    }).pipe(
      delay(500)
    )
  }
}
