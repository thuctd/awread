import { Injectable } from '@angular/core';
import { Apollo, gql } from "apollo-angular";
import { map } from 'rxjs/operators';
import { Creation } from '../models';

@Injectable({ providedIn: 'root' })
export class CreationsApi {

  constructor(
    private apollo: Apollo
  ) { }

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
              description
              cover
              published
              type
              age
              updatedAt
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
          allVCreations(condition: { userId: $userId }, orderBy: CREATED_AT_DESC) {
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
              age
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

  create(book) {
    return this.apollo.mutate({
      mutation: gql`
      mutation createBook (
        $userId: UUID!,
        $title: String,
        $cover: String,
        $description: String,
        $age: BigFloat,
        $completed: Boolean,
        $completed: Boolean,
        $publisherId: UUID,
        $categoryId: BigFloat,
        $authorIds: UUID[],
        $genreIds: BigFloat[],
        $type: BigFloat
      ) {
          newBook(
            input: {
              userId: $userId,
              title: $title,
              age: $age,
              authorIds: $authorIds,
              categoryId: $categoryId,
              completed: $completed,,
              cover: $cover,
              description: $description,
              genreIds: $genreIds,
              publisherId: $publisherId,
              type: $type
              }
          ) {
            uuid
          }
        }
      `,
      variables: book,
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
      variables: book,
    });
  }


}
