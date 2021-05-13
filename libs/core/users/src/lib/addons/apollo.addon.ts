import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

@Injectable({ providedIn: 'root' })
export class ApolloAddon {

  constructor(
    private apollo: Apollo
  ) {
  }

  async logout() {
    return await this.apollo.client.clearStore();
  }

}
