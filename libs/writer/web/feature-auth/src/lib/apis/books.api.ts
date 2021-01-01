import { tap, retry, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BooksApi {
  constructor(private apollo: Apollo) {}

  getAllBooks() {
    return this.apollo
      .query({
        query: gql`
          query getAllBooks {
            allBooks {
              nodes {
                bookid
                title
                img
                description
                completed
                publishedat
                updatedat
                categoryByCategoryid {
                  categoryid
                  name
                }
                chaptersByBookid {
                  totalCount
                  nodes {
                    status
                  }
                }
              }
            }
          }
        `,
      })
      .pipe(
        tap((res) => console.log('all books: ', res)),
        catchError((err) => {
          console.error('An error occurred:', err);
          return of(err);
        })
      );
  }

  addBook(book) {
    return this.apollo
      .mutate({
        mutation: gql`
      mutation createBook($bookid: String, $title: String, $description: String, $tags: String, $status: String, $completed: Boolean) {
        createBook(
          input: {book: {{bookid: $bookId, title: $title, description: $description, tags: $tags, status: $status, completed: $completed, categoryid: "2f5187d5-ca67-47a8-aba8-f34e9d07d08a"}}
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
          completed: book.completed ?? false,
          status: book.status ?? 'DRAFT',
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
            $bookid: String
            $title: String
            $description: String
            $tags: String
            $status: String
            $completed: Boolean
          ) {
            updateBookByBookid(
              input: {
                bookPatch: {
                  title: $title
                  description: $description
                  tags: $tags
                  status: $status
                  completed: $completed
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
          completed: book.completed ?? false,
          status: book.status ?? 'DRAFT',
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
          mutation removeBook($bookId: String, $status: String) {
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
          mutation removeBook($bookId: String) {
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
