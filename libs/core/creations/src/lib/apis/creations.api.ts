import { Injectable } from '@angular/core';
import { Apollo, gql } from "apollo-angular";
import { map } from 'rxjs/operators';
import { Creation } from '../models';

@Injectable({ providedIn: 'root' })
export class CreationsApi {

  constructor(
    private apollo: Apollo
  ) { }


  get(userId) {
    return this.apollo.query({
      query: gql`
        query getAllBooks($userId: UUID!) {
          allVCreations(condition: { isDeleted: false, userId: $userId }, orderBy: CREATED_AT_DESC) {
            nodes {
              title
              bookId
              categoryId
              completed
              publisherId
              createdAt
              description
              cover
              published
              type
              ages
              updatedAt
              userId,
              publishedCount,
              draftCount,
              viewCount
            }
          }
        }
      `,
      variables: { userId },
    }).pipe(
      map(result => result?.['data']?.['allVCreations']?.['nodes'])
    )
  }

  getDetail(bookid: string) {
    return this.apollo.query({
      query: gql`
        query getAllBooks($bookid: String) {
          allBooks(condition: { bookid: $bookid, isdeleted: false }) {
            nodes {
              bookid
              title
              img
              description
              completed
              status
              audience
              publishedat
              updatedat
              categoryByCategoryid {
                categoryid
                name
              }
              chaptersByBookid(orderBy: CREATEDAT_ASC) {
                totalCount
                nodes {
                  chapterid
                  title
                  content
                  status
                  updatedat
                  publishedat
                }
              }
            }
          }
        }
      `,
      variables: { bookid },
    });
  }

  add(book) {
    console.log('edit book: ', book, Creation(book));
    return this.apollo.mutate({
      mutation: gql`
      `,
      variables: {
        ...Creation(book)
      },
    });
  }

  edit(book) {
    console.log('edit book: ', book, Creation(book));
    return this.apollo.mutate({
      mutation: gql`
      `,
      variables: {
        ...Creation(book)
      },
    });
  }

  updateStatus(bookId: string, status: string) {
    return this.apollo.mutate({
      mutation: gql`
        mutation removeBook($bookId: String!, $status: BookStatus) {
          updateBookByBookid(
            input: { bookPatch: { status: $status }, bookid: $bookId }
          ) {
            book {
              bookid
            }
          }
        }
      `,
      variables: {
        bookId,
        status,
      },
    });
  }

  remove(bookId: string) {
    return this.apollo.mutate({
      mutation: gql`
        mutation removeBook($bookId: String!) {
          updateBookByBookid(
            input: { bookPatch: { isdeleted: true }, bookid: $bookId }
          ) {
            book {
              bookid
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
