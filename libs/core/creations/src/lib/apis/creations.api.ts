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


}
