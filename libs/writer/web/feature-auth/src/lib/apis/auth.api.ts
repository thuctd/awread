import { AngularFirestore } from "@angular/fire/firestore";
import { Injectable } from "@angular/core";
import { Apollo, gql } from "apollo-angular";
import { of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
@Injectable({ providedIn: "root" })
export class AuthApi {
  constructor(
    private apollo: Apollo,
    private http: HttpClient,
    private firestore: AngularFirestore
  ) {}

  updateNewPassword(newPassword: string) {
    this.apollo
      .mutate({
        mutation: gql`
          mutation resetpw($account: String, $pw: String) {
            fnUpdateNewPassword(input: { account: $account, pw: $pw }) {
              status
            }
          }
        `,
        variables: { account: localStorage.getItem("email"), pw: newPassword },
      })
      .subscribe((res) => {
        console.log("result", res);
      });
  }

  signin(user) {
    this.apollo
      .mutate({
        mutation: gql`
          mutation signup(
            $userid: String
            $fullname: String
            $accountname: String
            $password: String
            $img: String
            $emailverified: Boolean
            $provider: String
          ) {
            signup(
              input: {
                userid: $userid
                fullname: $fullname
                accountname: $accountname
                password: $password
                img: $img
                emailverified: $emailverified
                provider: $provider
              }
            ) {
              jwtToken
            }
          }
        `,
        variables: {
          userid: user.uid ?? this.firestore.createId(),
          fullname: user.displayName ?? null,
          accountname: user.email ?? null,
          password: user.password,
          img: user.photoUrl ?? null,
          emailverified: user.emailverified ?? false,
          provider: user.provider,
        },
      })
      .pipe(
        tap((res) => {
          if (
            res &&
            res.data &&
            res.data["signup"] &&
            res.data["signup"]["jwtToken"]
          ) {
            window.localStorage.setItem(
              "token",
              res.data["signup"]["jwtToken"]
            );
          }
        }),
        catchError((err) => {
          return of(err);
        })
      )
      .subscribe((res) => {
        console.log("result login: ", res);
      });
  }

  setCustomClaimsToken(token: string) {
    this.http
      .post("http://localhost:4000/setCustomClaims", { idToken: token })
      .subscribe((res: any) => {
        console.log("result", res);
        if (res.status) {
        }
      });
  }

  getCurrentUser() {
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
          console.log("currentUser", res);
        })
      );
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
      .valueChanges.subscribe((result: any) => {
        console.log("allBooks", result);
      });
  }

  createNewUser(user) {
    console.log("new user", user);
    return this.apollo
      .mutate({
        mutation: gql`
          mutation signup(
            $fullname: String
            $emailVerified: Boolean
            $img: String
            $password: String
            $userid: String
            $email: String
            $provider: String
          ) {
            signup(
              input: {
                fullname: $fullname
                emailverified: $emailVerified
                img: $img
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
        variables: {
          email: user.email ?? null,
          fullname: user.displayName ?? null,
          emailVerified: user.emailVerified ?? false,
          img: user.photoURL ?? null,
          password: user.password ?? "",
          userid: user.uid,
          provider: user.provider,
        },
      })
      .pipe(
        catchError((err) => {
          console.log("error", err);
          return of(err);
        })
      );
  }
}
