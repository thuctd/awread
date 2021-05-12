import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';

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
    })
      .pipe(
        map(res => res?.['data']?.['allMvMostViewBooks']?.['nodes'])
      );
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
    })
      .pipe(
        map(res => res?.['data']?.['allBooks']?.['nodes'])
      )
  }

  getLatestBooks(categoryId: string) {
    if (categoryId === '') {
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
      }).pipe(
        map(res => res?.['data']?.['allMvBooksLatestChapters']?.['nodes'])
      )
    }
    return this.apollo.query({
      query: gql`
        query allMvBooksLatestChapters ($categoryId: BigFloat) {
          allMvBooksLatestChapters(first: 10, condition: {categoryId: $categoryId}) {
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
      variables: { categoryId }
    }).pipe(
      map(res => res?.['data']?.['allMvBooksLatestChapters']?.['nodes'])
    )
  }
}
