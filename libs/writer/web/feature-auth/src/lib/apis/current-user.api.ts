import { createUserObject, User } from './../models/current-user.model';
import { catchError, retry, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { of, throwError } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class CurrentUserApi {
  constructor(private apollo: Apollo) { }

  getCurrentUser() {
    return this.apollo.query({
      query: gql`
        query getcurentuser {
          allGetCurrentUsers {
            nodes {
              userid
              address
              photourl
              fullname
              phone
              username
              website
              introduce
              email
              dob
              gender
            }
          }
        }
      `,
    });
  }

  update(user: User) {
    return this.apollo.mutate({
      mutation: gql`
        mutation updateUser(
          $address: String
          $dob: String
          $fullname: String
          $gender: String
          $introduce: String
          $phone: String
          $photoUrl: String
          $updatedat: Datetime
          $username: String
          $website: String
          $email: String
          $userid: String!
        ) {
          updateUserByUserid(
            input: {
              userPatch: {
                address: $address
                dob: $dob
                fullname: $fullname
                gender: $gender
                introduce: $introduce
                phone: $phone
                photourl: $photoUrl
                updatedat: $updatedat
                username: $username
                website: $website
                email: $email
              }
              userid: $userid
            }
          ) {
            user {
              userid
            }
          }
        }
      `,
      variables: createUserObject(user),
    });
  }
}
