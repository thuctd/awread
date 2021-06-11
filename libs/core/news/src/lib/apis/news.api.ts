import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class NewsApi {
  constructor(private http: HttpClient, private apollo: Apollo) {}

  url = 'https://raw.githubusercontent.com/thanhtung060201/thanhtung/master/testttt.json';

  get() {
    return this.http.get(this.url);
  }

  getContentNews(newsId) {
    return this.http.get(
      `https://raw.githubusercontent.com/thanhtung060201/thanhtung/master/${newsId}.news`,
      { responseType: 'text' }
    );
  }
}
