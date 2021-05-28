import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BooksHomeApi {
  constructor(private apollo: Apollo) { }

  getGoodBooks() {
    return this.apollo.query({
      query: gql`
        query allMvMostViewBooks {
          allMvMostViewBooks(first: 10, orderBy: VIEWS_DESC, condition: {published: true}) {
            nodes {
              bookId
              title
              categoryId
              newestChapters
              updatedAt
              views
            }
          }
        }
      `,
    })
      .pipe(
        map(res => res?.['data']?.['allMvMostViewBooks']?.['nodes'])
      );
  }

  getFeatureBooks() {
    return this.apollo.query({
      query: gql`
        query allMvMostViewBooks {
          allMvMostViewBooks(first: 6, condition: {published: true}) {
            nodes {
              bookId
              categoryId
              newestChapters
              title
              updatedAt
              cover
            }
          }
        }
      `,
    })
      .pipe(
        map(res => res?.['data']?.['allMvMostViewBooks']?.['nodes'])
      )
  }

  getLatestBooks(categoryId: string, offset: number) {
    return this.apollo.query({
      query: gql`
          query allMvBooksLatestChapters ($offset: Int ${categoryId ? `,$categoryId: BigFloat` : ''}) {
            allMvBooksLatestChapters(first: 10, offset: $offset condition: {published: true ${categoryId ? `, categoryId: $categoryId ` : ''}}) {
              nodes {
                bookId
                categoryId
                newestChapters
                title
                updatedAt
                authors
              }
            }
          }
        `,
      variables: { categoryId, offset }
    }).pipe(
      map(res => res?.['data']?.['allMvBooksLatestChapters']?.['nodes'])
    )
  }
}
