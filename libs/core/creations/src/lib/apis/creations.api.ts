import { Injectable } from '@angular/core';
import { Apollo, gql } from "apollo-angular";
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CreationsApi {

  constructor(
    private apollo: Apollo
  ) { }

  generateUuid() {
    return this.apollo.mutate({
      mutation: gql`
        mutation generateUuid {
          generateUuid(input: {}) {
            uuid
          }
        }
      `
    })
      .pipe(
        map(res => res?.['data']?.['generateUuid']?.['uuid'])
      );
  }

  getOne(bookId) {
    return this.apollo.query({
      query: gql`
        query getAllBooks($bookId: UUID!) {
          allBooks(condition: { bookId: $bookId }) {
            nodes {
              title
              bookId
              categoryId
              completed
              publisherId
              createdAt
              publishedAt
              updatedAt
              description
              cover
              published
              type
              age
              userId
              booksGenresByBookId {
                nodes {
                  genreId
                }
              }
              authorsByBookId {
                nodes {
                  userId
                  userByUserId {
                    name
                  }
                }
              }
            }
          }
        }
      `,
      variables: { bookId },
    }).pipe(
      map(result => result?.['data']?.['allBooks']?.['nodes']?.[0])
    )
  }


  get(userId) {
    return this.apollo.query({
      query: gql`
        query getAllBooks($userId: UUID!) {
          allVCreations(condition: { userId: $userId, isDeleted: false }, orderBy: UPDATED_AT_DESC) {
            nodes {
              title
              bookId
              categoryId
              completed
              publisherId
              createdAt
              publishedAt
              updatedAt
              description
              cover
              published
              type
              age
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

  create(book) {
    return this.apollo.mutate({
      mutation: gql`
      mutation newBook (
        $bookId: UUID!,
        $userId: UUID!,
        $title: String,
        $description: String,
        $age: BigFloat,
        $completed: Boolean,
        $published: Boolean,
        $cover: Boolean,
        $publisherId: UUID,
        $categoryId: BigFloat,
        $authorIds: [UUID],
        $genreIds: [BigFloat],
        $type: BigFloat
      ) {
          newBook(
            input: {
              bookId: $bookId,
              userId: $userId,
              title: $title,
              age: $age,
              authorIds: $authorIds,
              categoryId: $categoryId,
              completed: $completed,
              published: $published,
              cover: $cover,
              description: $description,
              genreIds: $genreIds,
              publisherId: $publisherId,
              type: $type
            }
          )  {
            uuid
          }
        }
      `,
      variables: {
        ...book,
        title: book.title ?? 'Untitle',
      },
    });
  }

  update(book) {
    return this.apollo.mutate({
      mutation: gql`
       mutation editBook (
        $bookId: UUID!,
        $userId: UUID!,
        $title: String,
        $description: String,
        $age: BigFloat,
        $completed: Boolean,
        $published: Boolean,
        $cover: Boolean,
        $publisherId: UUID,
        $categoryId: BigFloat,
        $authorIds: [UUID],
        $genreIds: [BigFloat],
        $type: BigFloat
      ) {
          editBook(
            input: {
              bookId: $bookId,
              userId: $userId,
              title: $title,
              age: $age,
              authorIds: $authorIds,
              categoryId: $categoryId,
              completed: $completed,
              published: $published,
              cover: $cover,
              description: $description,
              genreIds: $genreIds,
              publisherId: $publisherId,
              type: $type
            } 
          )  {
            uuid
          }
        }
      `,
      variables: {
        ...book,
        title: book.title ?? 'Untitle',
      },
    });
  }


  delete(bookId) {
    return this.apollo.mutate({
      mutation: gql`
       mutation deleteBook (
        $bookId: UUID!
      ) {
        updateBookByBookId(input: {bookPatch: {isDeleted: true}, bookId: $bookId}) {
          book {
            bookId
          }
        }
        }
      `,
      variables: { bookId },
    });
  }


}
