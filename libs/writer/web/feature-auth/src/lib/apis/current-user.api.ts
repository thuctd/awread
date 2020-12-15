import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({ providedIn: 'root' })
export class CurrentUserApi {

  constructor(
    private apollo: Apollo
  ) { }

  get() {
  }

  update() {

  }

}
