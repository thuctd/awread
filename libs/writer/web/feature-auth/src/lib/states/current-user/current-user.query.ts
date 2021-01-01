import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { CurrentUserStore, CurrentUserState } from './current-user.store';

@Injectable({ providedIn: 'root' })
export class CurrentUserQuery extends Query<CurrentUserState> {
  currentUser$ = this.select().pipe(
    tap((data) => console.log('user current$: ', data))
  );
  constructor(protected store: CurrentUserStore) {
    super(store);
  }

  getUserId() {
    return this.getValue().userid;
  }

  selectUserId() {
    return this.select((e) => e.userid);
  }
}
