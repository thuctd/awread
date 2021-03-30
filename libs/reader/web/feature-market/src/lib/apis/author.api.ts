import { Author } from './../models/author.model';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthorApi {
  constructor(private apollo: Apollo) { }

  get() { }
}
