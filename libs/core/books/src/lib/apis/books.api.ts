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

  getAllBooks() {
    return this.apollo.query({
      query: gql`
        query getAllBooks {
          allBooks(first: 50, orderBy: UPDATED_AT_DESC) {
            nodes {
              bookId
              cover
              title
              description
              published
              updatedAt
              completed
              categoryByCategoryId {
                categoryId
                name
              }
              chaptersByBookId(first: 2, orderBy: POSITION_ASC) {
                nodes {
                  chapterId
                  position
                  published
                  updatedAt
                }
                totalCount
              }
              booksGenresByBookId {
                nodes {
                  genreId
                }
              }
            }
          }
        }
      `,
    }).pipe(
        map(res => res?.['data']?.['allBooks']?.['nodes'])
      );
  }

  getComposedBooks() {
    return this.apollo.query({
      query: gql`
        query getAllBooks {
          allBooks(first: 10, orderBy: UPDATED_AT_DESC) {
            nodes {
              bookId
              title
              description
              published
              updatedAt
              completed
              categoryByCategoryId {
                categoryId
                name
              }
              chaptersByBookId(orderBy: CREATED_AT_DESC) {
                nodes {
                  published
                  updatedAt
                }
                totalCount
              }
              booksGenresByBookId {
                nodes {
                  genreId
                }
              }
            }
          }
        }
      `,
    });
  }

  getCollectedBooks() {
    return this.apollo.query({
      query: gql`
        query getAllBooks {
          allBooks(first: 10, orderBy: UPDATED_AT_DESC) {
            nodes {
              bookId
              title
              description
              published
              updatedAt
              completed
              categoryByCategoryId {
                categoryId
                name
              }
              chaptersByBookId(orderBy: CREATED_AT_DESC) {
                nodes {
                  published
                  updatedAt
                }
                totalCount
              }
              booksGenresByBookId {
                nodes {
                  genreId
                }
              }
            }
          }
        }
      `,
    });
  }

  getCategoryBooks(categoryId: string) {
    return this.apollo.query({
      query: gql`
        query allBooks($categoryId: UUID!) {
          allBooks(first: 10, condition: { categoryId: $categoryId }) {
            nodes {
              bookId
              title
              description
              published
              updatedAt
              completed
              categoryByCategoryId {
                categoryId
                name
              }
              chaptersByBookId(orderBy: CREATED_AT_DESC) {
                nodes {
                  published
                  updatedAt
                }
                totalCount
              }
              booksGenresByBookId {
                nodes {
                  genreId
                }
              }
            }
          }
        }
      `,
      variables: {
        categoryId,
      },
    }).pipe(
        map(res => res?.['data']?.['allBooks']?.['nodes'])
      );
  }

  getAuthorBooks(userId: string) {
    return this.apollo.mutate({
      mutation: gql`
        mutation AuthorBooks($userId: UUID) {
          getAuthorBooks(input: { userId: $userId }) {
            mvBooksLatestChapters {
              bookId
              categoryId
              newestChapters
              updatedAt
              title
            }
          }
        }
      `,
      variables: {
        userId,
      },
    }).pipe(
        map(res => res?.['data']?.['getAuthorBooks']?.['mvBooksLatestChapters'])
      );
  }

  getGenreBooks(genreId: string) {
    return this.apollo.query({
      query: gql`
        query allVRandomBooks($genreId: BigFloat!) {
          allVRandomBooks(filter: { genreIds: { anyEqualTo: $genreId } }, first: 20) {
            nodes {
              bookId
              genreIds
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
              completed
              description
              genres
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
