import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apollo, gql } from "apollo-angular";

@Injectable({ providedIn: 'root' })
export class ForgotPasswordApi {

  constructor(
    private apollo: Apollo,
    private httpClient: HttpClient,
  ) { }

  get() {
  }

  send(email) {
    const url = `http://localhost:3333/api/forgot-password/send-email?email=${email}`;
    return this.httpClient.get(`${url}`);
  }

  check(token, userId) {
    const url = `http://localhost:3333/api/forgot-password/check-token`;
    return this.httpClient.post(`${url}`, { token, userId });
  }

  updateNewPassword(token, userId, password) {
    const url = `http://localhost:3333/api/forgot-password/new-password`;
    return this.httpClient.post(`${url}`, { token, userId, password });
  }
}
