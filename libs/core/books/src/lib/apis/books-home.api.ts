import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({ providedIn: 'root' })
export class BooksHomeApi {
  constructor(private apollo: Apollo) { }

  getGoodBooks() {
    return this.apollo.query({
      query: gql`
        query allMvMostViewBooks {
          allMvMostViewBooks(first: 10, orderBy: VIEWS_DESC) {
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
          allBooks(first: 6, orderBy: UPDATED_AT_DESC) {
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
              chaptersByBookId(orderBy: POSITION_ASC, first: 2) {
                nodes {
                  chapterId
                  position
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
