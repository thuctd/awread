import { Injectable } from '@angular/core';
import { Apollo, gql } from "apollo-angular";
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SettingApi {

  constructor(
    private apollo: Apollo
  ) { }

  get() {
    return this.apollo.query({
      query: gql`
      query MyQuery {
        allMvSettings {
          nodes {
            storage
            version
            settingId
          }
        }
      }
      `
    })
      .pipe(
        map(res => res.data?.['allMvSettings']?.['nodes']?.[0])
      )
  }

}
