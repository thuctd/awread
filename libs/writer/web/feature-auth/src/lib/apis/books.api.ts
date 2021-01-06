import { tap, retry, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BooksApi {
  constructor(private apollo: Apollo) {}

  getAllBooks() {
    return this.apollo.query({
      query: gql`
        query getAllBooks {
          allBooks(condition: { isdeleted: false }) {
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

  createBook(book) {
    console.log('create book: ', book);
    return this.apollo
      .mutate({
        mutation: gql`
          mutation createBook(
            $bookid: String!
            $userid: String!
            $title: String!
            $description: String
            $tags: [String]
            $status: BookStatus
            $completed: Boolean
            $updatedat: Datetime
            $publishedat: Datetime
          ) {
            createBook(
              input: {
                book: {
                  bookid: $bookid
                  userid: $userid
                  title: $title
                  description: $description
                  tags: $tags
                  status: $status
                  completed: $completed
                  updatedat: $updatedat
                  publishedat: $publishedat
                  categoryid: "2f5187d5-ca67-47a8-aba8-f34e9d07d08a"
                }
              }
            ) {
              book {
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
                chaptersByBookid {
                  totalCount
                  nodes {
                    chapterid
                    title
                    status
                    updatedat
                    publishedat
                  }
                }
              }
            }

            createUserBook(
              input: {
                userBook: {
                  userid: $userid
                  bookid: $bookid
                  publishedat: $publishedat
                }
              }
            ) {
              userBook {
                bookid
              }
            }
          }
        `,
        variables: {
          bookid: book.bookid,
          userid: book.userid,
          title: book.title ?? '',
          description: book.description ?? '',
          tags: book.tags ?? [],
          completed: book.completed ?? false,
          status: book.status ?? 'DRAFT',
          updatedat: new Date(),
          publishedat: new Date(),
        },
      })
      .pipe(
        tap((res) => console.log('add books: ', res)),
        catchError((err) => {
          console.error('An error occurred:', err);
          return of(err);
        })
      );
  }

  editBook(book) {
    return this.apollo
      .mutate({
        mutation: gql`
          mutation updateBook(
            $bookid: String!
            $title: String
            $description: String
            $tags: [String]
            $status: BookStatus
            $completed: Boolean
            $updatedat: Datetime
          ) {
            updateBookByBookid(
              input: {
                bookPatch: {
                  title: $title
                  description: $description
                  tags: $tags
                  status: $status
                  completed: $completed
                  updatedat: $updatedat
                }
                bookid: $bookid
              }
            ) {
              book {
                bookid
              }
            }
          }
        `,
        variables: {
          bookid: book.bookid,
          title: book.title ?? '',
          description: book.description ?? '',
          tags: book.tags ?? [],
          status: book.status ?? 'DRAFT',
          completed: book.completed ?? false,
          updatedat: new Date(),
        },
      })
      .pipe(
        tap((res) => console.log('update books: ', res)),
        catchError((err) => {
          console.error('An error occurred:', err);
          return of(err);
        })
      );
  }

  updateBookStatus(bookId: string, status: string) {
    return this.apollo
      .mutate({
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
      })
      .pipe(
        tap((res) => console.log('update status books: ', res)),
        catchError((err) => {
          console.error('An error occurred:', err);
          return of(err);
        })
      );
  }

  removeBook(bookId: string) {
    return this.apollo
      .mutate({
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
      })
      .pipe(
        tap((res) => console.log('remove books: ', res)),
        catchError((err) => {
          console.error('An error occurred:', err);
          return of(err);
        })
      );
  }
}
