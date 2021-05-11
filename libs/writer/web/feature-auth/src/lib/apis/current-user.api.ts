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
      mutation updateUserByUserId($userId: UUID!, $firstname: String, $middlename: String, $lastname:String) {
        updateUserByUserId(
          input: {
            userId: $userId,
            userPatch: {
              firstname: $firstname,
              lastname: $lastname,
              middlename: $middlename,
            }
          }
        ) {
          user {
            firstname
          }
        }
      }
      `,
      variables: {
        ...user,
        userId: "7cc248bc-8d3a-4f23-b8ab-6ae93c3848b0"
      },
    })
  }
}
