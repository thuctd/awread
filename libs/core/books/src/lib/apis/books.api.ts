import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
@Injectable({ providedIn: 'root' })
export class BooksApi {
  constructor(private apollo: Apollo) { }

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
    return this.apollo
      .query({
        query: gql`
         query allMvBooksLatestChapters($first: Int ${categoryId ? `, $categoryId: BigFloat` : ''}) {
        allMvBooksLatestChapters (first: $first, condition: {published: true ${categoryId ? `, categoryId: $categoryId ` : ''}} ){
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
      `,
        variables: { categoryId, first },
      })
      .pipe();
  }

  getAuthorBooks(authorIds: string[]) {
    //NOTE: console.log(`containsAnyKeys: ${['id1', 'id2']}`); // containsAnyKeys: id1,id2
    //NOTE: console.log(`containsAnyKeys: ${JSON.stringify(['id1', 'id2'])}`); // containsAnyKeys: ["id1","id2"]
    //NOTE: JSON.stringify() is important
    return this.apollo
      .query({
        query: gql`
      query allMvBooksLatestChapters {
        allMvBooksLatestChapters(
              filter: {authors: {containsAnyKeys: ${JSON.stringify(authorIds)} }}, condition: { published: true, isDeleted: false }
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
        }
      }
      `,
      })
      .pipe(map((res) => res?.['data']?.['allMvBooksLatestChapters']?.['nodes']));
  }

  getGenreBooks(genreId: string) {
    return this.apollo
      .query({
        query: gql`
          query allVRandomBooks($genreId: String!) {
            allVRandomBooks(condition: {isDeleted: false, published: true} filter: { genres: { containsKey: $genreId } }, first: 20) {
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
            allMvMostViewBooks(first: $first orderBy: VIEWS_DESC condition: {isDeleted: false, published: true}) {
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
    const type = filters.type == 'composed' ? 0 : 1;
    const publishedAt = this.transformDate(filters.postingDate);
    let queryString = '';
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

    queryString = `query ${mvBooks}( $published: Boolean = true ${categoryId ? `$categoryId: BigFloat` : ''} ${filters.completed ? `$completed: Boolean` : ''} ${filters.type ? `, $type: BigFloat` : ''}) {
              ${mvBooks}(first: 20, condition: { published: $published ${categoryId ? `categoryId: $categoryId, ` : ''} ${filters.type ? ` type: $type, ` : ''} ${filters.completed ? `completed: $completed` : ''}},
              ${filters.criteria === '0' ? `orderBy: PUBLISHED_DESC, ` : ''}
              filter: { updatedAt: {greaterThan: "${publishedAt}"} ${genres.length ? `, genres: {containsAnyKeys: ${JSON.stringify(genres)}}` : ''}}) {
                nodes {
                  bookId
                  title
                  categoryId
                  newestChapters
                  createdAt
                  publishedAt
                  updatedAt
                  authors
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

  private transformDate(postingDate: any) {
    const date = new Date();
    date.setDate(date.getDate() - (postingDate === '' ? 7300 : postingDate));
    const dd = String(date.getDate()).padStart(2, '0');
    const MM = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();

    return yyyy + '-' + MM + '-' + dd;
  }
}
