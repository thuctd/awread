import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, delay, first } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BooksHomeApi {
  constructor(private apollo: Apollo) { }

  getGoodBooks(first: number) {    
    return this.apollo.query({
      query: gql`
        query allMvMostViewBooks($first: Int) {
          allMvMostViewBooks(first: $first, orderBy: VIEWS_DESC, condition: {published: true, isDeleted: false}) {
            nodes {
              bookId
              title
              categoryId
              newestChapters
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
      `, variables: {first}
    })
      .pipe();
  }

  getFeatureBooks(offset: number, first: number) {
    offset = offset * 6;
    return this.apollo.query({
      query: gql`
        query allMvMostViewBooks($offset: Int, $first: Int) {
          allMvMostViewBooks(first: $first offset: $offset condition: {published: true, isDeleted: false}) {
            nodes {
              bookId
              categoryId
              newestChapters
              title
              updatedAt
              cover
            }
            pageInfo {
              hasNextPage
            }
            totalCount
          }
        }
      `,
      variables: { offset, first }
    })
      .pipe()
  }

  getLatestBooks(categoryId: string, offset: number) {
    let first = 10;
    if (window.innerWidth <= 768) {
        first = 6
        offset = offset * 6; 
    }    
    return this.apollo.query({
      query: gql`
          query allMvBooksLatestChapters ($first: Int $offset: Int ${categoryId ? `,$categoryId: BigFloat` : ''}) {
            allMvBooksLatestChapters(
              first: $first,
              offset: $offset,
              orderBy: PUBLISHED_DESC,
              condition: {
                published: true,
                isDeleted: false ${categoryId ? `, 
                categoryId: $categoryId ` : ''
        }
              }
            ) {
              nodes {
                bookId
                categoryId
                newestChapters
                title
                updatedAt
                authors
                cover
              }
              pageInfo {
                hasNextPage
              }
              totalCount
            }
          }
        `,
      variables: { categoryId, offset, first }
    }).pipe()
  }
}
