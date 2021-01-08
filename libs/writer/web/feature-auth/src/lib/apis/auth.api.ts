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

  createAccountOnServer(user: UserInputMutation) {
    return this.apollo.mutate({
      mutation: gql`
        mutation signup(
          $fullname: String
          $emailVerified: String
          $photourl: String
          $password: String
          $userid: String
          $email: String
          $provider: String
        ) {
          signup(
            input: {
              fullname: $fullname
              emailverified: $emailVerified
              photourl: $photourl
              password: $password
              userid: $userid
              email: $email
              provider: $provider
            }
          ) {
            string
          }
        }
      `,
      // TODO: không gán trực tiếp trong variable như này, refactor sử dụng function ở current-user model (ví dụ hàm newUser )
      variables: {
        email: user.email ?? null,
        fullname: user.displayName ?? null,
        emailVerified: user.emailVerified ?? 'false',
        photourl: user.photoURL ?? null,
        password: user.password ?? '',
        userid: user.uid,
        provider: user.provider ?? 'email/password',
        address: user.address ?? '',
        phone: user.phone ?? '',
        createdat: user.createdat ?? new Date(),
      },
    });
  }
}
