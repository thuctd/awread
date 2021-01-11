import { tap, catchError, retry, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { User } from '../..';
import { CurrentUserService, CurrentUserStore } from '../states/current-user';
import { CurrentUserApi } from '../apis';

@Injectable({ providedIn: 'root' })
export class CurrentUserGear {
  constructor(
    private currentUserApi: CurrentUserApi,
    private currentUserService: CurrentUserService,
    private currentUserStore: CurrentUserStore
  ) {}

  getCurrentUser() {
    return this.currentUserApi.getCurrentUser().pipe(
      map((res) => {
        if (res['data'] && res['data']['allGetCurrentUsers']['nodes']) {
          const user = res['data']['allGetCurrentUsers']['nodes'];
          return user;
        }
        return [];
      }),
      tap((users) => {
        console.log('current user: ', users);
        if (users && users.length) {
          this.currentUserService.setCurrentUserAkita(users[0]);
        }
      }),
      catchError((err) => of(err))
    );
  }

  update(user: User) {
    return this.currentUserApi.update(user).pipe(
      tap((res) => {
        if (res && res['data']) {
          alert('update ok');
          this.currentUserStore.updateCurrentUserAkita(user);
        }
      }),
      catchError((err) => {
        alert('Update loi!');
        return throwError(err);
      }),
      retry(2)
    );
  }
}
