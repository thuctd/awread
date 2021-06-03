import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class NewsApi {
  constructor(private http: HttpClient, private apollo: Apollo) {}

  url = 'https://raw.githubusercontent.com/small-cosmos/awread-hq/master/blogs/index.json';

  get() {
    return this.http.get(this.url);
  }
}
