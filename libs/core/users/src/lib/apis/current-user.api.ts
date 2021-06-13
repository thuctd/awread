import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { SettingFacade } from '@awread/core/setting';
import { CurrentUserQuery } from '../states/current-user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class CurrentUserApi {
  // user$: Observable<any>;
  // user: any;
  constructor(private apollo: Apollo, private currentUserQuery: CurrentUserQuery) {
    // setInterval(function () {
    //   this.httpClient
    //     .get(`https://raw.githubusercontent.com/small-cosmos/awread-hq/master/news/index.json`)
    //     .subscribe(result => {
    //       console.log('news result', result);
    //       result = result.banner;
    //     });
    //  }, 3000);
  }

  getCurrentUser() {
    return this.apollo
      .query({
        query: gql`
          mutation thisUser {
            thisUser(input: {}) {
              results {
                users {
                  userId
                  username
                  email
                  phone
                  name
                  updatedAt
                  avatar
                }
                personals {
                  firstname
                  middlename
                  lastname
                  age
                  dob
                  gender
                  bio
                  websiteAddress
                  facebookAddress
                }
              }
            }
          }
        `,
      })
      .pipe(
        map((res) => ({
          ...res.data?.['thisUser']?.['results']?.[0]?.['users'],
          ...res.data?.['thisUser']?.['results']?.[0]?.['personals'],
        }))
      );
  }

  updatePersonal(user) {
    return this.apollo.mutate({
      mutation: gql`
        mutation updateUserByUserId(
          $userId: UUID!
          $firstname: String
          $middlename: String
          $lastname: String
          $dob: String
          $bio: String
          $websiteAddress: String
          $facebookAddress: String
          $zaloAddress: String
          $age: BigFloat
          $gender: BigFloat
        ) {
          updateUserByUserId(
            input: {
              userId: $userId
              userPatch: {
                firstname: $firstname
                middlename: $middlename
                lastname: $lastname
                dob: $dob
                bio: $bio
                websiteAddress: $websiteAddress
                facebookAddress: $facebookAddress
                zaloAddress: $zaloAddress
                age: $age
                gender: $gender
              }
            }
          ) {
            user {
              firstname
              middlename
              lastname
              dob
              bio
              websiteAddress
              facebookAddress
              zaloAddress
              age
              gender
            }
          }
        }
      `,
      variables: {
        ...user,
        userId: this.currentUserQuery.getUserId(),
      },
    });
  }

  updateUser(user) {
    return this.apollo.mutate({
      mutation: gql`
        mutation updateUserByUserId(
          $userId: UUID!
          $username: String
          $email: String
          $phone: String
          $name: String
          $avatar: Boolean
        ) {
          updateUserByUserId(
            input: {
              userId: $userId
              userPatch: { username: $username, email: $email, phone: $phone, name: $name, avatar: $avatar }
            }
          ) {
            user {
              username
              email
              phone
              name
              avatar
            }
          }
        }
      `,
      variables: {
        ...user,
        userId: this.currentUserQuery.getUserId(),
      },
    });
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
        userId: this.currentUserQuery.getUserId(),
      },
    });
  }
}
