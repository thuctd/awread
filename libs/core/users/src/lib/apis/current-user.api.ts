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
                  ages
                  dob
                  gender
                  bio
                  websiteAddress
                  facebookAddress
                  genreIds
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

  updatePersonal(personal, action: 'create' | 'update' = 'update') {
    const userId = this.currentUserQuery.getUserId();
    const mutation = action == 'create' ? 'createPersonal' : 'updatePersonalByUserId';
    const inputPatch = action == 'create' ? 'personal' : 'personalPatch';
    return this.apollo.mutate({
      mutation: gql`
        mutation ${mutation}(
          $userId: UUID!
          $firstname: String
          $middlename: String
          $lastname: String
          $dob: String
          $bio: String
          $websiteAddress: String
          $facebookAddress: String
          $zaloAddress: String
          $ages: [BigFloat]
          $gender: BigFloat
          $genreIds: [BigFloat]
        ) {
          ${mutation}(
            input: {
              ${action == 'create' ? '' : 'userId: $userId'}
              ${inputPatch}: {
                userId: $userId
                firstname: $firstname
                middlename: $middlename
                lastname: $lastname
                dob: $dob
                bio: $bio
                websiteAddress: $websiteAddress
                facebookAddress: $facebookAddress
                zaloAddress: $zaloAddress
                ages: $ages
                gender: $gender
                genreIds: $genreIds
              }
            }
          ) {
            personal {
              firstname
              middlename
              lastname
              dob
              bio
              websiteAddress
              facebookAddress
              zaloAddress
              ages
              gender
              genreIds
            }
          }
        }
      `,
      variables: {
        ...personal,
        userId,
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
          $facebook: String
          $google: String
          $apple: String
        ) {
          updateUserByUserId(
            input: {
              userId: $userId
              userPatch: {
                username: $username
                email: $email
                phone: $phone
                name: $name
                avatar: $avatar
                facebook: $facebook
                google: $google
                apple: $apple
              }
            }
          ) {
            user {
              username
              email
              phone
              name
              avatar
              facebook
              google
              apple
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
            userId: $userId
            userPatch: {
              ${credential.provider}: $providerId
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

  agreeBecomeWriter() {
    return this.apollo.mutate({
      mutation: gql`
      mutation refreshToken($clientMutationId: String) {
          refreshToken(input: {clientMutationId: $clientMutationId}) {
            results {
              accessToken
            }
          }
        }
      `,
      variables: {
        clientMutationId: this.currentUserQuery.getUserId(),
      },
    });
  }
}
