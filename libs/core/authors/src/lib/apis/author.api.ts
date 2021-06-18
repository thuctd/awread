import { map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({ providedIn: 'root' })
export class AuthorApi {
  constructor(private apollo: Apollo) { }

  getAuthors() {
    return this.apollo.query({
      query: gql`
        query allAuthors {
          allAuthors {
            nodes {
              userByUserId {
                userId
                name
              }
            }
          }
        }
      `,
    });
  }

  getDetailAuthor(userId: string) {
    return this.apollo
      .query({
        query: gql`
          query AuthorDetail($userId: UUID!) {
            userByUserId(userId: $userId) {
              username
              email
              phone
              name
              avatar
              facebook
              google
              apple
            }
            personalByUserId(userId: $userId) {
              firstname
              middlename
              lastname
              dob
              bio
              websiteAddress
              facebookAddress
              zaloAddress
              gender
            }
          }
        `,
        variables: {
          userId,
        },
      })
      .pipe(

      );
  }
}
