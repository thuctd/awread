import {
  createUserFromFirebase,
  FirebaseUser,
} from './../models/current-user.model';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UserInputMutation } from '../..';
@Injectable({ providedIn: 'root' })
export class AuthApi {
  constructor(private apollo: Apollo, private http: HttpClient) {}

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
              fullname: $displayName
              emailverified: $emailVerified
              photourl: $photoUrl
              password: $password
              userid: $uid
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
