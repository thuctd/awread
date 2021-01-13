import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({ providedIn: 'root' })
export class UserBookApi {
  constructor(private apollo: Apollo) {}

  getAllBooksByUserid(userid: string) {
    return this.apollo.query({
      query: gql`
        query allBooksByUserid($userid: String) {
          allUserBooks(condition: { userid: $userid }) {
            nodes {
              bookByBookid {
                bookid
                description
                introduce
                img
                categoryid
                title
                viewcount
                rate
                publishedat
                completed
              }
            }
          }
        }
      `,
      variables: { userid },
    });
  }
}
