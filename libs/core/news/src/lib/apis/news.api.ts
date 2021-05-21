import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class NewsApi {
  constructor(private http: HttpClient, private apollo: Apollo) {}

  get() {
    return this.http.get(`https://raw.githubusercontent.com/small-cosmos/awread-hq/c569f648e1771b5c09a787e0f54c6c3115c84510/blogs/index.json`);
  }
}
