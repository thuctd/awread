import { TransformDateApi } from './trans-form-date-api';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
@Injectable({ providedIn: 'root' })
export class BooksApi {
  constructor(private apollo: Apollo, private transformDate: TransformDateApi) { }

  searchBookByTerm(filter: string) {
    return this.apollo
      .mutate({
        mutation: gql`
          mutation SearchBooks($filter: String) {
            searchBooks(input: { searchTerm: $filter }) {
              mvBooksLatestChapters {
                title
                authors
                newestChapters
                genres
                bookId
                categoryId
                completed
                publisherId
                description
                cover
                published
                type
                age
                publishedAt
                createdAt
                updatedAt
                userId
              }
            }
          }
        `,
        variables: {
          filter,
        },
      })
      .pipe(map((res) => res?.['data']?.['searchBooks']?.['mvBooksLatestChapters']));
  }

  getCategoryBooks(categoryId?: string, first?: number) {
    console.log('categoryId: ', categoryId);
    return this.apollo
      .query({
        query: gql`
         query allMvBooksLatestChapters($first: Int ${categoryId ? `, $categoryId: BigFloat` : ''}) {
        allMvBooksLatestChapters (
          first: $first
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
            userId
          }
        }
      }
      `,
        variables: { categoryId, first },
      })
      .pipe(map((res) => res?.['data']?.['allMvBooksLatestChapters']?.['nodes']));
  }

  getAuthorBooks(authorIds: string[], first: number = 10) {
    //NOTE: console.log(`containsAnyKeys: ${['id1', 'id2']}`); // containsAnyKeys: id1,id2
    //NOTE: console.log(`containsAnyKeys: ${JSON.stringify(['id1', 'id2'])}`); // containsAnyKeys: ["id1","id2"]
    //NOTE: JSON.stringify() is important
    return this.apollo
      .query({
        query: gql`
      query allMvBooksLatestChapters ($first: Int) {
        allMvBooksLatestChapters(
                  first: $first
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
            userId
          }
          pageInfo {
              hasNextPage
          }
          totalCount
        }
      }
      `, variables: { first },
      })
      .pipe();
  }

  getGenreBooks(genreId: string) {
    return this.apollo
      .query({
        query: gql`
          query allVRandomBooks($genreId: String!) {
            allVRandomBooks(
              condition: {isDeleted: false, published: true}
              filter: { genres: { containsKey: $genreId } }, first: 20) {
              nodes {
                bookId
                categoryId
                genres
                type
                title
                userId
                cover
              }
            }
          }
        `,
        variables: { genreId },
      })
      .pipe(map((res) => res?.['data']?.['allVRandomBooks']?.['nodes']));
  }

  getTopBooks(first?: number) {
    return this.apollo
      .query({
        query: gql`
          query getTopBooks ($first: Int) {
            allMvMostViewBooks(
              first: $first
              orderBy: VIEWS_DESC
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
                hasNextPage
              }
              totalCount
            }
          }
        `, variables: { first }
      })
      .pipe();
  }

  getBookById(bookId: string) {
    return this.apollo
      .query({
        query: gql`
          query allMvBooksLatestChapters($bookId: UUID!) {
            allMvBooksLatestChapters(condition: { bookId: $bookId } ) {
              nodes {
                authors
                bookId
                categoryId
                genres
                completed
                description
                published
                publisherId
                title
                type
                age
                createdAt
                publishedAt
                updatedAt
                userId
                cover
              }
            }
          }
        `,
        variables: {
          bookId,
        },
      })
      .pipe(map((res) => res?.['data']?.['allMvBooksLatestChapters']?.['nodes']));
  }

  getFilterBooks(filters, categoryId: string) {
    const genres = filters.genres;
    const completed = filters.completed === '0' ? false : true;
    const type = filters.typeBook == 'composed' ? 0 : 1;
    const updatedAt = this.transformDate.transformDate(filters.postingDate);
    let queryString = '';
    let queryFilter = '';
    let mvBooks = '';

    if (filters.criteria === '') {
      mvBooks = 'allMvBooksLatestChapters';
    } else if (filters.criteria === '0') {
      mvBooks = 'allMvBooksLatestChapters';
    } else if (filters.criteria === '1') {
      mvBooks = 'allMvMostViewBooks';
    } else if (filters.criteria === '2') {
      mvBooks = 'allMvMostViewBooks';
    } else {
      mvBooks = 'allVRandomBooks';
    }

    queryFilter = `
          ${updatedAt || genres.length ? `filter: { ${updatedAt ? `updatedAt: {greaterThan: "${updatedAt}"}` : ''} ${genres.length ? `genres: {containsAnyKeys: ${JSON.stringify(genres)}}` : ''}}` : ''}`;

    queryString = `query ${mvBooks}
                ($published: Boolean = true $type: BigFloat ${categoryId ? `$categoryId: BigFloat` : ''} ${filters.completed ? `$completed: Boolean` : ''}) {
                ${mvBooks}(
                first: 20
                condition: { published: $published ,type: $type ${categoryId ? `,categoryId: $categoryId` : ''} ${filters.completed ? `,completed: $completed` : ''}}
                ${filters.criteria === '0' ? `orderBy: PUBLISHED_DESC ` : ''}     ${queryFilter}) {
                  nodes {
                    bookId
                    title
                    categoryId
                    newestChapters
                    createdAt
                    publishedAt
                    updatedAt
                    authors
                    cover
                  }
                }
              }`;
    return this.apollo.query({
      query: gql`
          ${queryString}
        `,
      variables: { categoryId, type, completed },
    }).pipe(map((res) => res?.['data']?.[mvBooks]?.['nodes']));
  }
}
