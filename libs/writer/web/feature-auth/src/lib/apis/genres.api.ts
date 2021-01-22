import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({ providedIn: 'root' })
export class GenresApi {
  constructor(private apollo: Apollo) {}

  getAllGenres() {
    return this.apollo.query({
      query: gql`
        query getAllGenres {
          allGenres {
            nodes {
              genreid
              name
            }
          }
        }
      `,
    });
  }
}
