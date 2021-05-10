import { createUserFromFirebase, FirebaseUser } from './../models';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class AuthApi {
  constructor(private apollo: Apollo, private http: HttpClient) { }

  authenticateUser(loginname: string, password: string) {
    return this.apollo.mutate({
      mutation: gql`
        mutation authenticateUser($loginname: String, $password: String) {
          authenticateUser(input: { loginname: $loginname, password: $password }) {
            results {
              accessToken
              matchPassword
              user {
                name
                userId
              }
            }
          }
        }
      `,
      variables: { loginname, password },
    }).pipe(
      map(res => res.data?.['authenticateUser']?.['results'][0]),
      map(result => {
        if (result.accessToken) {
          return {
            case: 'success',
            ...result
          }
        } else if (result.user) {
          return {
            case: 'password-not-match',
            ...result,
          }
        } else {
          return {
            case: 'account-not-exist',
            ...result
          }
        }
      }))
  }

  updatePassword(email: string, newPassword: string, type = 'forgot') {
    return this.apollo.mutate({
      mutation: gql`
        mutation resetpw($email: String, $pw: String, $type: String) {
          fnUpdateNewPassword(input: { email: $email, pw: $pw, type: $type }) {
            status
          }
        }
      `,
      variables: { email, pw: newPassword, type },
    });
  }

  setCustomClaimsToken(token: string) {
    this.http
      .post('http://localhost:4000/setCustomClaims', { idToken: token })
      .subscribe((res) => {
        console.log('result', res);
        // if (res.status) {}
      });
  }

  getCurrentUserIdAndRole() {
    return this.apollo
      .watchQuery({
        query: gql`
          query currentUser {
            currentRoles
            currentUserId
          }
        `,
      })
      .valueChanges.pipe(
        tap((res) => {
          console.log('currentUser', res);
        })
      );
  }

  checkEmailExistInDatabase(email: string) {
    return this.apollo.mutate({
      mutation: gql`
        mutation getUserBaseEmail($email: String) {
          getUserBaseEmail(input: { mail: $email }) {
            results {
              email
            }
          }
        }
      `,
      variables: { email: email },
    });
  }

  getUserBaseEmail(email: string) {
    return this.apollo.mutate({
      mutation: gql`
        mutation getUserBaseEmail($email: String) {
          getUserBaseEmail(input: { mail: $email }) {
            results {
              email
              password
              provider
              userid
            }
          }
        }
      `,
      variables: { email: email },
    });
  }

  getAllBooks() {
    this.apollo
      .watchQuery({
        query: gql`
          query allBooks {
            allBooks {
              nodes {
                bookid
              }
            }
          }
        `,
      })
      .valueChanges.subscribe((result) => {
        console.log('allBooks', result);
      });
  }

  createAccountOnServer(user: FirebaseUser) {
    console.log('FirebaseUser: ', user);
    console.log('user: ', createUserFromFirebase(user));
    return this.apollo.mutate({
      mutation: gql`
        mutation signup(
          $displayName: String
          $emailVerified: Boolean
          $photoUrl: String
          $password: String
          $uid: String
          $email: String
          $provider: String
        ) {
          signup(
            input: {
              userid: $uid
              fullname: $displayName
              photourl: $photoUrl
              emailverified: $emailVerified
              password: $password
              email: $email
              provider: $provider
            }
          ) {
            string
          }
        }
      `,
      variables: createUserFromFirebase(user),
    });
  }
}
