import { Injectable } from "@angular/core";
import { Apollo, gql } from "apollo-angular";
import { of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
@Injectable({ providedIn: "root" })
export class AuthApi {
  constructor(private apollo: Apollo, private http: HttpClient) {}

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
            $account: String
            $fullname: String
            $emailVerified: Boolean
            $img: String
            $password: String
            $userid: String
          ) {
            signup(
              input: {
                accountname: $account
                fullname: $fullname
                emailverified: $emailVerified
                img: $img
                password: $password
                userid: $userid
              }
            ) {
              message
            }
          }
        `,
        variables: {
          account: user.email,
          fullname: user.displayName,
          emailVerified: user.emailVerified,
          img: user.photoURL,
          password: "",
          userid: user.uid,
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
