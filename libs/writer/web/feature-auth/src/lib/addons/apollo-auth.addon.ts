import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

@Injectable({ providedIn: 'root' })
export class ApolloAuthAddon {

  constructor(
    private apollo: Apollo
  ) {
  }

  async logout() {
    return await this.apollo.client.clearStore();
  }

}
