import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { of } from 'rxjs';
import { delay, take } from 'rxjs/operators';
import db from './db.json';

@Injectable({ providedIn: 'root' })
export class BooksApi {
  constructor(private apollo: Apollo) { }

  //Text commit git
  getFilterBooks(filters) {
    console.log('api filters', filters);
    return of(db.books).pipe(delay(500));
  }

  searchBookByTerm(term: string) {
    return of(db.books.filter((book) => book.title.toLowerCase().includes(term.toLowerCase()))).pipe(delay(500));
  }

  getAllBooks() {
    return this.apollo.query({
      query: gql`
        query getAllBooks {
          allBooks(orderBy: UPDATED_AT_DESC) {
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

  getGoodBooks() {
    return this.apollo.query({
      query: gql`
        query allMvMostViewBooks {
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

  getFeatureBooks() {
    return this.apollo.query({
      query: gql`
        query getFeatureBooks {
          allBooks(orderBy: UPDATED_AT_DESC, first: 8) {
            nodes {
              bookId
              title
              description
              completed
              published
              updatedAt
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

  getLatestBooks() {
    return this.apollo.query({
      query: gql`
        query allMvBooksLatestChapters {
          allMvBooksLatestChapters(orderBy: VIEWS_DESC) {
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

  getComposedBooks() {
    return of(db.books.slice(0, 8)).pipe(delay(500));
  }

  getCollectedBooks() {
    return of(db.books).pipe(delay(500));
  }

  getCategoryBooks(categoryId: string) {
    return of(db.books.filter((book) => book.category === categoryId)).pipe(delay(500));
  }

  getTopBooks() {
    return of(db.books.slice(0, 3)).pipe(delay(500));
  }

  getAuthorBooks(authorId: string) {
    return of(db.books.filter((book) => book.authorId === authorId).slice(0, 3)).pipe(delay(500));
  }

  getGenreBooks(genreId: string) {
    return of(db.books.filter((book) => book.genres.find((genre) => genre === genreId))).pipe(delay(500));
  }

  getBookById(bookId: string) {
    return this.apollo.query({
      query: gql`
        query allMvDetailBooks($bookId: String) {
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
      `,
      variables: { bookId },
    });
  }
}
