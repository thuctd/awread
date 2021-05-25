import { Injectable } from '@angular/core';
import { Apollo, gql } from "apollo-angular";
import { Creation } from '../models';

@Injectable({ providedIn: 'root' })
export class CreationsApi {

  constructor(
    private apollo: Apollo
  ) { }


  get() {
    return this.apollo.query({
      query: gql`
        query getAllBooks {
          allBooks(condition: { isdeleted: false }, orderBy: CREATEDAT_DESC) {
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
              chaptersByBookid(orderBy: CREATEDAT_DESC) {
                totalCount
                nodes {
                  status
                  updatedat
                  publishedat
                }
              }
              bookGenresByBookid {
                nodes {
                  genreid
                }
              }
            }
          }
        }
      `,
    });
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
