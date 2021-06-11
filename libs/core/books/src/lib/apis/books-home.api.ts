import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BooksHomeApi {
  constructor(private apollo: Apollo) { }

  getGoodBooks(first = 5) {
    return this.apollo
      .query({
        query: gql`
          query allMvMostViewBooks($first: Int) {
            allMvMostViewBooks(
              first: $first,
              orderBy: VIEWS_DESC,
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

  getFeatureBooks(currentPage = 0, first = 6) {
    return this.apollo
      .query({
        query: gql`
          query allMvMostViewBooks($first: Int, $offset: Int) {
            allMvMostViewBooks(
              first: $first,
              offset: $offset,
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
                hasNextPage
              }
              totalCount
            }
          }
        `,
        variables: { offset: currentPage > 1 ? currentPage * first : undefined, first },
      })
      .pipe(map(res => res?.['data']?.['allMvMostViewBooks']));
  }

  getLatestBooks(currentPage = 0, first = 10, categoryId: string) {
    return this.apollo
      .query({
        query: gql`
          query allMvBooksLatestChapters ($categoryId: BigFloat, $first: Int, $offset: Int) {
            allMvBooksLatestChapters(
              first: $first
              offset: $offset
              condition: {
                published: true
                isDeleted: false
                categoryId: $categoryId
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
        variables: {
          categoryId: categoryId && categoryId.length ? categoryId : undefined,
          offset: currentPage > 1 ? currentPage * first : undefined,
          first,
        },
      })
      .pipe(map(res => res?.['data']?.['allMvBooksLatestChapters']));
  }



  getGenreBooks(genreId: string, first = 10) {
    return this.apollo
      .query({
        query: gql`
          query allVRandomBooks($genreId: String!, $first: Int) {
            allVRandomBooks(
              condition: {isDeleted: false, published: true}
              filter: { genres: { containsKey: $genreId } }
              first: $first
            ) {
              nodes {
                bookId
                categoryId
                genres
                type
                title
                userId
                cover
              }
              pageInfo {
                hasNextPage
              }
              totalCount
            }
          }
        `,
        variables: { genreId, first },
      })
      .pipe(map((res) => res?.['data']?.['allVRandomBooks']));
  }

}
