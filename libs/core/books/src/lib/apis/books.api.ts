import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({ providedIn: 'root' })
export class BooksApi {
  constructor(private apollo: Apollo) { }

  getFilterBooks(filters) {
    return this.apollo.mutate({
      mutation: gql`
        mutation SearchBooks($filters: String!) {
          searchBooks(input: { searchTerm: $filters }) {
            books {
              title
              description
              userId
            }
          }
        }
      `,
      variables: {
        filters,
      },
    });
  }

  searchBookByTerm(filter: string) {
    return this.apollo.mutate({
      mutation: gql`
        mutation SearchBooks($filter: String) {
          searchBooks(input: { searchTerm: $filter }) {
            books {
              bookId
              title
              description
              userId
              published
              categoryByCategoryId {
                categoryId
                name
              }
              booksGenresByBookId {
                nodes {
                  genreId
                }
              }
              chaptersByBookId(first: 2, orderBy: POSITION_ASC) {
                nodes {
                  chapterId
                  position
                }
              }
            }
          }
        }
      `,
      variables: {
        filter,
      },
    }).pipe(
      map(res => res?.['data']?.['searchBooks']?.['books'])
    );
  }


  getCategoryBooks(categoryId?: string) {
    return this.apollo.query({
      query: gql`
         query allMvBooksLatestChapters${categoryId ? `($categoryId: BigFloat)` : ''} {
        allMvBooksLatestChapters (first: 10, condition: {published: true ${categoryId ? `, categoryId: $categoryId ` : ''}} ){
          nodes {
            title
            authors
            newestChapters
            genres
            bookId
            categoryId
            completed
            publisherId
            createdAt
            description
            cover
            published
            genres
            type
            ages
            updatedAt
            userId
          }
        }
      }
      `,
      variables: {
        categoryId,
      },
    }).pipe(
      map(res => res?.['data']?.['allMvBooksLatestChapters']?.['nodes'])
    );
  }

  getAuthorBooks(authorIds: string[]) {
    //NOTE: console.log(`containsAnyKeys: ${['id1', 'id2']}`); // containsAnyKeys: id1,id2
    //NOTE: console.log(`containsAnyKeys: ${JSON.stringify(['id1', 'id2'])}`); // containsAnyKeys: ["id1","id2"]
    //NOTE: JSON.stringify() is important
    return this.apollo.query({
      query: gql`
      query allMvBooksLatestChapters {
        allMvBooksLatestChapters(
              filter: {authors: {containsAnyKeys: ${JSON.stringify(authorIds)} }}, condition: { published: true }
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
            createdAt
            description
            cover
            published
            genres
            type
            ages
            updatedAt
            userId
          }
        }
      }
      `

    }).pipe(
      map(res => res?.['data']?.['allMvBooksLatestChapters']?.['nodes'])
    );
  }

  getGenreBooks(genreId: string) {
    return this.apollo.query({
      query: gql`
        query allVRandomBooks($genreId: String!) {
          allVRandomBooks(filter: { genres: { containsKey: $genreId } }, first: 20) {
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
    }).pipe(
      map(res => res?.['data']?.['allVRandomBooks']?.['nodes'])
    );
  }

  getTopBooks() {
    return this.apollo.query({
      query: gql`
        query getTopBooks {
          allMvMostViewBooks(first: 3, orderBy: VIEWS_DESC) {
            nodes {
              bookId
              title
              categoryId
              genres
              type
              newestChapters
              updatedAt
              views
            }
          }
        }
      `,
    }).pipe(
      map(res => res?.['data']?.['allMvMostViewBooks']?.['nodes'])
    );
  }

  getBookById(bookId: string) {
    return this.apollo.query({
      query: gql`
        query allMvDetailBooks($bookId: UUID!) {
          allMvDetailBooks(condition: { bookId: $bookId }) {
            nodes {
              ages
              authors
              bookId
              categoryId
              genres
              type
              completed
              description
              published
              publisherId
              title
              updatedAt
              userId
            }
          }
        }
      `,
      variables: {
        bookId,
      },
    }).pipe(
      map(res => res?.['data']?.['allMvDetailBooks']?.['nodes'])
    );
  }
}
