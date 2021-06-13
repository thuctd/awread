import { Injectable } from '@angular/core';
import { Apollo, gql } from "apollo-angular";
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ListBooksApi {

  constructor(
    private apollo: Apollo
  ) { }

  getGoodBookByCursor(after: string | undefined = undefined, first = 10) {
    return this.apollo
      .query({
        query: gql`
          query allMvMostViewBooks($after: Cursor, $first: Int) {
            allMvMostViewBooks(
              first: $first
              after: $after
              orderBy: VIEWS_DESC
              condition: {
                published: true
                isDeleted: false
              }) {
              nodes {
                bookId
                title
                categoryId
                newestChapters
                updatedAt
                views
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
      .pipe(map(res => res?.['data']?.['allMvMostViewBooks']));
  }

  getFeaturetBookByCursor(after: string | undefined = undefined, first = 10) {
    return this.apollo
      .query({
        query: gql`
          query allMvMostViewBooks($after: Cursor, $first: Int) {
            allMvMostViewBooks(
              first: $first
              after: $after
              condition: {
                published: true
                isDeleted: false
              }) {
              nodes {
                bookId
                categoryId
                newestChapters
                title
                updatedAt
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
      .pipe(map(res => res?.['data']?.['allMvMostViewBooks']));
  }

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


  getTopBookByCursor(after: string | undefined = undefined, first = 10) {
    return this.apollo
      .query({
        query: gql`
          query getTopBooks ($after: Cursor, $first: Int) {
            allMvMostViewBooks(
              first: $first
              after: $after
              condition: {isDeleted: false, published: true}) {
              nodes {
                bookId
                title
                categoryId
                genres
                type
                newestChapters
                publishedAt
                createdAt
                updatedAt
                views
                cover
              }
              pageInfo {
                endCursor
                hasNextPage
              }
              totalCount
            }
          }
        `, variables: { after, first }
      })
      .pipe(map(res => res?.['data']?.['allMvMostViewBooks']));
  }

  getCategoryBookByCursor(categoryId: string | undefined, after: string | undefined = undefined, first = 10) {
    return this.apollo
      .query({
        query: gql`
         query allMvBooksLatestChapters($after: Cursor, $first: Int ${categoryId ? `, $categoryId: BigFloat` : ''}) {
        allMvBooksLatestChapters (
          first: $first
          after: $after
          condition: {completed: true, isDeleted: false ${categoryId ? `, categoryId: $categoryId ` : ''}} ){
          nodes {
            title
            authors
            newestChapters
            bookId
            categoryId
            completed
            publisherId
            description
            cover
            published
            genres
            type
            age
            publishedAt
            createdAt
            updatedAt
          }
          pageInfo {
            endCursor
            hasNextPage
          }
          totalCount
        }
      }
      `,
        variables: { categoryId, after, first },
      })
      .pipe(map(res => res?.['data']?.['allMvBooksLatestChapters']));
  }

  getAuthorBookByCursor(authorIds: string[], after: string, first: number = 10) {
    return this.apollo
      .query({
        query: gql`
      query allMvBooksLatestChapters ($after: Cursor, $first: Int) {
        allMvBooksLatestChapters(
                  first: $first
                  after: $after
                  filter: {authors: {containsAnyKeys: ${JSON.stringify(authorIds)} }}
                  condition: { published: true, isDeleted: false }
        ) {
          nodes {
            title
            authors
            newestChapters
            genres
            bookId
            categoryId
            completed
            description
            cover
            published
            type
            age
            publishedAt
            createdAt
            updatedAt
          }
          pageInfo {
            endCursor
            hasNextPage
          }
          totalCount
        }
      }
      `, variables: { after, first },
      })
      .pipe(map(res => res?.['data']?.['allMvBooksLatestChapters']));
  }
}
