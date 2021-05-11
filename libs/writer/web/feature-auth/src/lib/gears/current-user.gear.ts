import { tap, catchError, retry, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import type { User } from '../models';
import { CurrentUserService, CurrentUserStore } from '../states/current-user';
import { CurrentUserApi } from '../apis';
import { SnackbarsService } from '@awread/global/packages';

@Injectable({ providedIn: 'root' })
export class CurrentUserGear {
  constructor(
    private currentUserApi: CurrentUserApi,
    private currentUserService: CurrentUserService,
    private currentUserStore: CurrentUserStore,
    private snackbarsService: SnackbarsService
  ) { }

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
    ).subscribe(result => {
      if (result.data) {
        this.snackbarsService.showSuccess('Cập nhật thông tin thành công!');
        this.currentUserStore.updateCurrentUserAkita(user);
      } else {
        this.snackbarsService.showError(result.errors?.[0]['message']);
      }
    })
  }
}
