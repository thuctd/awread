import { map } from 'rxjs/operators';
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
          query AuthorDetail($userId: UUID) {
            allAuthors(condition: { userId: $userId }) {
              nodes {
                userByUserId {
                  userId
                  name
                  age
                  apple
                  avatar
                  bio
                  code
                  createdAt
                  dob
                  email
                  facebook
                  facebookAddress
                  firstname
                  gender
                  lastname
                  google
                  middlename
                  phone
                  username
                  websiteAddress
                }
                userId
              }
            }
          }
        `,
        variables: {
          userId,
        },
      })
      .pipe(map((res) => res?.['data']?.['allAuthors']?.['nodes']));
  }
}
