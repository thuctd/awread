import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({ providedIn: 'root' })
export class BooksHomeApi {
  constructor(private apollo: Apollo) { }

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
        query allBooks {
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
          allMvBooksLatestChapters(first: 10) {
            nodes {
              bookId
              categoryId
              newestChapters
              title
              updatedAt
            }
          }
        }
      `,
    });
  }

}
