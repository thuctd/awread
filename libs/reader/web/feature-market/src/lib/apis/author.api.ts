import { Injectable } from '@angular/core';
import { Apollo, gql } from "apollo-angular";

@Injectable({ providedIn: 'root' })
export class AuthorApi {

  constructor(
    private apollo: Apollo
  ) { }

  get() {
  }

}
