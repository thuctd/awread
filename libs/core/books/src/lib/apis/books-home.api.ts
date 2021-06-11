import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BooksHomeApi {
  constructor(private apollo: Apollo) { }

  getGoodBooks(first: number) {
    return this.apollo
      .query({
        query: gql`
          query allMvMostViewBooks($first: Int) {
            allMvMostViewBooks(first: $first, orderBy: VIEWS_DESC, condition: { published: true, isDeleted: false }) {
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
                hasNextPage
              }
              totalCount
            }
          }
        `,
        variables: { first },
      })
      .pipe(map(res => res?.['data']?.['allMvMostViewBooks']));
  }

  getFeatureBooks(offset: number, first: number, isCheck: boolean) {
    offset = offset * 6;
    console.log(first);
    return this.apollo
      .query({
        query: gql`
          query allMvMostViewBooks($first: Int ${!isCheck ? `,$offset: Int` : ''}) {
            allMvMostViewBooks(first: $first ${!isCheck ? `,offset: $offset` : ''}, condition: { published: true, isDeleted: false }) {
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
        variables: { offset, first },
      })
      .pipe(map(res => res?.['data']?.['allMvMostViewBooks']));
  }

  getLatestBooks(categoryId: string, offset: number, first: number, isCheck: boolean) {
    offset = window.innerWidth <= 768 ? offset * 6 : offset * 10;
    console.log(first);
    return this.apollo
      .query({
        query: gql`
          query allMvBooksLatestChapters ($first: Int ${!isCheck ? `,$offset: Int` : ''} ${categoryId ? `,$categoryId: BigFloat` : ''}) {
            allMvBooksLatestChapters(
              first: $first
              ${!isCheck ? ` offset: $offset` : ''}
              condition: {
                published: true,
                isDeleted: false ${categoryId
            ? `,
                categoryId: $categoryId `
            : ''
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
        variables: { categoryId, offset, first },
      })
      .pipe(map(res => res?.['data']?.['allMvBooksLatestChapters']));
  }
}
