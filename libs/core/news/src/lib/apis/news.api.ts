import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class NewsApi {
  constructor(private http: HttpClient, private apollo: Apollo) {}

  get() {
    return this.http.get(`https://raw.githubusercontent.com/thanhtung060201/thanhtung/master/ccc.json`);
  }
}
