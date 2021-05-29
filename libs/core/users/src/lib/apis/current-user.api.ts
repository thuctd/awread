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
  constructor(
    private apollo: Apollo,
    private currentUserQuery: CurrentUserQuery,
  ) {
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

  updateName(user) {
    return this.apollo.mutate({
      mutation: gql`
      mutation updateUserByUserId(
        $userId: UUID!,
        $firstname: String,
        $middlename: String,
        $lastname: String
        ) {
        updateUserByUserId(
          input: {
            userId: $userId,
            userPatch: {
              firstname: $firstname,
              middlename: $middlename,
              lastname: $lastname,
            }
          }
        ) {
          user {
            firstname
            middlename
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

  update(user) {
    return this.apollo.mutate({
      mutation: gql`
      mutation updateUserByUserId(
        $userId: UUID!,
        $age: BigFloat,
        $gender: BigFloat,
        $username: String,
        $email: String,
        $phone: String,
        $name: String,
        $firstname: String,
        $middlename: String,
        $lastname: String,
        $avatar: Boolean,
        $dob: String,
        $bio: String,
        $websiteAddress: String,
        $facebookAddress: String,
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
