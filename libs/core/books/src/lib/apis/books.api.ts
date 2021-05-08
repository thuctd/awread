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
              categoryByCategoryId {
                categoryId
                name
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
        filter,
      },
    });
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
    });
  }

  getAuthorBooks(authorId: string) {
    return this.apollo.query({
      query: gql`
        query getAuthorBooks($userId: UUID) {
          allAuthors(first: 3, condition: { userId: $userId }) {
            nodes {
              bookId
              bookByBookId {
                bookId
                cover
                title
                description
                published
                updatedAt
                completed
                ages
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
        query getGenreBooks($genreId: BigFloat!) {
          allBooksGenres(first: 10, condition: { genreId: $genreId }) {
            nodes {
              bookId
              genreId
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
    });
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
    });
  }
}
