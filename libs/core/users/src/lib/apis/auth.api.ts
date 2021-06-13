import { CreateUserCredential, SocialLoginCredential } from './../models';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class AuthApi {
  constructor(private apollo: Apollo, private http: HttpClient) {}

  authenticateUser(variables) {
    return this.apollo
      .mutate({
        mutation: gql`
          mutation authenticateUser($loginname: String, $password: String) {
            authenticateUser(input: { loginname: $loginname, password: $password }) {
              results {
                accessToken
                matchPassword
                user {
                  name
                  firstname
                  userId
                }
              }
            }
          }
        `,
        variables,
      })
      .pipe(
        map((res) => res.data?.['authenticateUser']?.['results'][0]),
        map((result) => {
          if (result.accessToken) {
            return {
              case: 'success',
              ...result,
            };
          } else if (result.user) {
            return {
              case: 'password-not-match',
              ...result,
            };
          } else {
            return {
              case: 'account-not-exist',
              ...result,
            };
          }
        })
      );
  }

  authenticateSocialUser(variables: SocialLoginCredential) {
    return this.apollo
      .mutate({
        mutation: gql`
          mutation authenticateSocialUser($provider: String, $providerId: String) {
            authenticateSocialUser(input: { provider: $provider, providerId: $providerId }) {
              results {
                accessToken
                user {
                  name
                  firstname
                  userId
                }
              }
            }
          }
        `,
        variables,
      })
      .pipe(
        map((res) => res.data?.['authenticateSocialUser']?.['results'][0]),
        map((result) => {
          if (result.accessToken) {
            return {
              case: 'success',
              ...result,
            };
          } else {
            return {
              case: 'account-not-exist',
              ...result,
            };
          }
        })
      );
  }

  registerUser(variables: CreateUserCredential) {
    return this.apollo
      .mutate({
        mutation: gql`
          mutation newUser(
            $email: String
            $password: String
            $phone: String
            $username: String
            $facebook: String
            $google: String
            $apple: String
          ) {
            newUser(
              input: {
                username: $username
                email: $email
                phone: $phone
                name: $name
                avatar: $avatar
                facebook: $facebook
                google: $google
                apple: $apple
              }
            ) {
              results {
                case
                accessToken
                user {
                  userId
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
          }
        `,
        variables: variables,
      })
      .pipe(
        map((res) => res.data?.['newUser']?.['results']?.[0]),
        map((result) => {
          if (result.case == 'success') {
            return {
              case: 'success',
              ...result,
            };
          } else {
            let duplicateKey;
            let duplicateValue;
            switch (true) {
              case variables.email == result.user.email:
                duplicateKey = 'email';
                duplicateValue = result.user.email;
                break;
              case variables.phone == result.user.phone:
                duplicateKey = 'phone';
                duplicateValue = result.user.phone;
                break;
              case variables.username == result.user.username:
                duplicateKey = 'username';
                duplicateValue = result.user.username;
                break;

              default:
                console.error('chịu, chả hiểu lỗi gì', result);
                break;
            }

            return {
              duplicateKey,
              duplicateValue,
              ...result,
            };
          }
        })
      );
  }
}
