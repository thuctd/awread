import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({ providedIn: 'root' })
export class GenresApi {
  constructor(private apollo: Apollo) { }

  getAllGenres() {
    return this.apollo.query({
      query: gql`
        query allGenres {
          allGenres(first: 10) {
            nodes {
              genreId
              name
              description
            }
          }
        }
      `,
    });
  }

  getGenreById(genreId: string) {
    return this.apollo.query({
      query: gql`
        query allGenres($genreId: String!) {
          allGenres(condition: {genreId: $genreId}) {
            nodes {
              genreId
              name
              description
            }
          }
        }
      `,
      variables: {
        genreId
      }
    });
  }

}
