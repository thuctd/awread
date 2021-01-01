import { CurrentUserService } from './../states/current-user/current-user.service';
import { tap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CurrentUserApi } from '../apis/current-user.api';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CurrentUserGear {
  constructor(
    private currentUserApi: CurrentUserApi,
    private currentUserService: CurrentUserService
  ) {}

  getCurrentUser() {
    return this.currentUserApi.getCurrentUser().pipe(
      tap((res) => {
        console.log('current user: ', res);
        if (res && res.data && res.data['allGetCurrentUsers']['nodes'].length) {
          const user = res.data['allGetCurrentUsers']['nodes'][0];
          this.currentUserService.setCurrentUserToStore(user);
        }
      }),
      catchError((err) => of(err))
    );
  }

  update(user) {
    return this.currentUserApi.update(user);
  }
}
