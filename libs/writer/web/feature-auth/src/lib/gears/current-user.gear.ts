import { User } from './../models/current-user.model';
import { CurrentUserStore } from './../states/current-user/current-user.store';
import { CurrentUserService } from './../states/current-user/current-user.service';
import { tap, catchError, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CurrentUserApi } from '../apis/current-user.api';
import { of, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CurrentUserGear {
  constructor(
    private currentUserApi: CurrentUserApi,
    private currentUserService: CurrentUserService,
    private currentUserStore: CurrentUserStore
  ) {}

  getCurrentUser() {
    return this.currentUserApi.getCurrentUser().pipe(
      tap((res) => {
        console.log('current user: ', res);
        if (res && res.data && res.data['allGetCurrentUsers']['nodes'].length) {
          const user = res.data['allGetCurrentUsers']['nodes'][0];
          this.currentUserService.setCurrentUserAkita(user);
        }
      }),
      catchError((err) => of(err))
    );
  }

  update(user: User) {
    return this.currentUserApi.update(user).pipe(
      tap((res) => {
        if (res && res['data']) {
          // alert('Update thanh cong roi nhe babe!');
          console.log('user update akita: ', user);
          this.currentUserStore.updateCurrentUserAkita(user);
        }
      }),
      catchError((err) => {
        alert('Update loi nhe!');
        return throwError(err);
      }),
      retry(2)
    );
  }
}
