import { createUserObject, User } from './../models/current-user.model';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { of, throwError } from 'rxjs';
import { CurrentUserQuery } from '../states/current-user';
@Injectable({ providedIn: 'root' })
export class CurrentUserApi {
  constructor(
    private apollo: Apollo,
    private currentUserQuery: CurrentUserQuery
  ) { }


  getCurrentUser() {
    return this.apollo.query({
      query: gql`
        mutation currentUser {
          currentUser(input: {}) {
            user {
              userId
              username
              email
              phone
              name
              firstname
              middlename
              lastname
              age
              avatar
            }
          }
        }
      `,
    }).pipe(
      map(res => res.data?.['currentUser']?.['user'])
    )
  }

  update(user) {
    return this.apollo.mutate({
      mutation: gql`
      mutation updateUserByUserId($userId: UUID!, $firstname: String, $middlename: String, $lastname: String) {
        updateUserByUserId(
          input: {
            userId: $userId,
            userPatch: {
              firstname: $firstname,
              middlename: $middlename,
              lastname: $lastname
            }
          }
        ) {
          user {
            firstname,
            middlename,
            lastname
          }
        }
      }
      `,
      variables: {
        ...user,
        userId: this.currentUserQuery.getUserId()
      },
    })
  }


  linkSocial(credential) {
    return this.apollo.mutate({
      mutation: gql`
      mutation updateUserByUserId($userId: UUID!, $providerId: String) {
        updateUserByUserId(
          input: {
            userId: $userId,
            userPatch: {
              ${credential.provider}: $providerId,
            }
          }
        ) {
          user {
            ${credential.provider}
          }
        }
      }
      `,
      variables: {
        ...credential,
        userId: this.currentUserQuery.getUserId()
      },
    })
  }
}
