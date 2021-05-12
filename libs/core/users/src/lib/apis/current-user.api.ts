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
              dob
              gender
              bio
              websiteAddress
              facebookAddress 
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
      mutation updateUserByUserId(
        $userId: UUID!,
        age: BigFloat,
        gender: BigFloat,
        username: String,
        email: String,
        phone: String,
        name: String,
        firstname: String,
        middlename: String,
        lastname: String,
        avatar: String,
        dob: String,
        bio: String,
        websiteAddress: String,
        facebookAddress: String,
        ) {
        updateUserByUserId(
          input: {
            userId: $userId,
            userPatch: {
              age: $age,
              gender: $gender,
              username: $username,
              email: $email,
              phone: $phone,
              name: $name,
              firstname: $firstname,
              middlename: $middlename,
              lastname: $lastname,
              avatar: $avatar,
              dob: $dob,
              bio: $bio,
              websiteAddress: $websiteAddress,
              facebookAddress: $facebookAddress,
            }
          }
        ) {
          user {
            age
            gender
            username
            email
            phone
            name
            firstname
            middlename
            lastname
            avatar
            dob
            bio
            websiteAddress
            facebookAddress
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
