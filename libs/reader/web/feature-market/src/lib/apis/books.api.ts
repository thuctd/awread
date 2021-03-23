import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { tap } from 'rxjs/operators';
import { Book } from '../models';

@Injectable({ providedIn: 'root' })
export class BooksApi {
  baseUrl = 'http://localhost:3000';

  constructor(private apollo: Apollo, private http: HttpClient) { }

  getAllBooks() {
    return this.http.get<Book[]>(`${this.baseUrl}/books`).pipe(
      tap((books) => {
        console.log(books);
      })
    );
  }
}
