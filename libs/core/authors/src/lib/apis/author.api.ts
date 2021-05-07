import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({ providedIn: 'root' })
export class AuthorApi {
  constructor(private apollo: Apollo) { }

  getAuthors() {
    return this.apollo.query({
      query: gql`
        query allAuthors {
          allAuthors {
            nodes {
              userByUserId {
                userId
                name
              }
            }
          }
        }
      `,
    });
  }

  getDetailAuthor(authorId: string) {
    return this.apollo.query({
      query: gql`
        query AuthorDetail($authorId: String!) {
          allAuthors(condition: { userId: $authorId }) {
            nodes {
              userByUserId {
                userId
                name
              }
            }
          }
        }
      `,
      variables: {
        authorId
      }
    });
  }
}
