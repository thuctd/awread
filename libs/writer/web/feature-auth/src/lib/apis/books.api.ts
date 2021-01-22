import { Book, createBookObject } from './../models/book.model';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Genre } from '../..';
import { CREATE_BOOK_MUTATION, EDIT_BOOK_MUTATION } from '../graphqls';

export type GenreInput = {
  genreid: string;
  name: string;
};
@Injectable({ providedIn: 'root' })
export class BooksApi {
  constructor(private apollo: Apollo) {}

  getAllBooks() {
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

  getDetailBook(bookid: string) {
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

  // createUserBook(userid: string, bookid: string) {
  //   return this.apollo.mutate({
  //     mutation: gql`
  //       mutation createUserBook(
  //         $userid: String!
  //         $bookid: String!
  //         $publishedat: Datetime
  //       ) {
  //         createUserBook(
  //           input: {
  //             userBook: {
  //               userid: $userid
  //               bookid: $bookid
  //               publishedat: $publishedat
  //             }
  //           }
  //         ) {
  //           userBook {
  //             bookid
  //           }
  //         }
  //       }
  //     `,
  //     variables: { userid, bookid },
  //   });
  // }

  createBook(book: Book, genres: Genre[]) {
    console.log('create book: ', book);
    return this.apollo.mutate({
      mutation: CREATE_BOOK_MUTATION,
      variables: { ...createBookObject(book), genres },
    });
  }

  editBook(book: Book, genres: Genre[], idsGenresRemove: string[]) {
    return this.apollo.mutate({
      mutation: EDIT_BOOK_MUTATION,
      variables: {
        ...createBookObject(book),
        genres: genres,
        idsremove: idsGenresRemove,
      },
    });
  }

  updateBookStatus(bookId: string, status: string) {
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

  removeBook(bookId: string) {
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
