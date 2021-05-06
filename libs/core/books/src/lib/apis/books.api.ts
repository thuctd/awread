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
              title
              description
              userId
            }
          }
        }
      `,
      variables: {
        filter
      },
    });
  }

  getAllBooks() {
    return this.apollo.query({
      query: gql`
        query getAllBooks {
          allBooks(first: 100, orderBy: UPDATED_AT_DESC) {
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
        query allBooks($categoryId: String) {
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
    });
  }

  getAuthorBooks(authorId: string) {
    return this.apollo.query({
      query: gql`
        query getAuthorBooks($userId: String) {
          allBooks(first: 10, condition: { userId: $userId }) {
            nodes {
              bookId
              title
              description
              published
              updatedAt
              completed
              chaptersByBookId(orderBy: CREATED_AT_DESC) {
                nodes {
                  published
                  updatedAt
                }
                totalCount
              }
            }
          }
        }
      `,
      variables: {
        authorId,
      },
    });
  }

  getGenreBooks(genreId: string) {
    return this.apollo.query({
      query: gql`
        query getGenreBooks($genreId: BigFloat) {
          allBooksGenres(first: 20, condition: { genreId: $genreId }) {
            nodes {
              bookId
              bookByBookId {
                bookId
                title
                description
                published
                updatedAt
                completed
              }
            }
          }
        }
      `,
      variables: {
        genreId,
      },
    });
  }

  getTopBooks() {
    return this.apollo.query({
      query: gql`
        query getTopBooks {
          allMvMostViewBooks(orderBy: VIEWS_DESC) {
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
    });
  }

  getBookById(bookId: string) {
    return this.apollo.query({
      query: gql`
        query allMvDetailBooks($bookId: UUID!) {
          allMvDetailBooks(condition: { bookId: $bookId }) {
            nodes {
              bookId
              title
              description
              published
              updatedAt
              completed
              categoryId
              userId
            }
          }
        }
      `,
      variables: {
        bookId,
      },
    });
  }
}
