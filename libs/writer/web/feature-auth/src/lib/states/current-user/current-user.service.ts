import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CurrentUserStore } from './current-user.store';

@Injectable({ providedIn: 'root' })
export class CurrentUserService {
  constructor(private currentUserStore: CurrentUserStore) {}

  setCurrentUserToStore(user) {
    this.currentUserStore.update(user);
  }

  get() {
    return of({}).pipe(
      tap((entities) => this.currentUserStore.update(entities))
    );
  }

  logout() {
    this.currentUserStore.reset();
  }
}
