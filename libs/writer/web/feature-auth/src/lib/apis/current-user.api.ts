import { catchError, retry, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CurrentUserApi {
  constructor(private apollo: Apollo) {}

  getCurrentUser() {
    return this.apollo.query({
      query: gql`
        query getcurentuser {
          allGetCurrentUsers {
            nodes {
              userid
              address
              photourl
              fullname
              phone
              username
              website
              introduce
              email
              dob
              gender
            }
          }
        }
      `,
    });
  }

  update(user) {
    return this.apollo
      .mutate({
        mutation: gql`
          mutation updateUser(
            $address: String
            $dob: String
            $fullname: String
            $gender: String
            $introduce: String
            $phone: String
            $photourl: String
            $updatedat: Datetime
            $username: String
            $website: String
            $userid: String!
          ) {
            updateUserByUserid(
              input: {
                userPatch: {
                  address: $address
                  dob: $dob
                  fullname: $fullname
                  gender: $gender
                  introduce: $introduce
                  phone: $phone
                  photourl: $photourl
                  updatedat: $updatedat
                  username: $username
                  website: $website
                }
                userid: $userid
              }
            ) {
              user {
                userid
              }
            }
          }
        `,
        variables: {
          userid: user.userid,
          address: user.address ?? '',
          dob: user.dob ?? '',
          fullname: user.fullname ?? '',
          gender: user.gender ?? '',
          introduce: user.introduce ?? '',
          phone: user.phone ?? '',
          photourl: user.photourl ?? '',
          updatedat: new Date().toISOString(),
          username: user.username ?? '',
          website: user.website ?? '',
        },
      })
      .pipe(
        tap((res) => {
          if (res && res['data']) {
            alert('Update thanh cong roi nhe babe!');
          }
        }),
        catchError((err) => {
          alert('Update loi nhe!');
          return of(err);
        }),
        retry(2)
      );
  }
}
