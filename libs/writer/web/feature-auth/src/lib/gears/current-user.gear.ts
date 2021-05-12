import { tap, catchError, retry, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import type { ProviderType, User } from '../models';
import { CurrentUserService, CurrentUserStore } from '../states/current-user';
import { CurrentUserApi } from '../apis';
import { SnackbarsService } from '@awread/global/packages';
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { AuthRoutingGear } from './auth-routing.gear';

@Injectable({ providedIn: 'root' })
export class CurrentUserGear {
  constructor(
    private currentUserApi: CurrentUserApi,
    private currentUserService: CurrentUserService,
    private currentUserStore: CurrentUserStore,
    private snackbarsService: SnackbarsService,
    private socialAuthService: SocialAuthService,
    private authRoutingGear: AuthRoutingGear,
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


  async linkSocial(provider: ProviderType) {
    let socialUser: SocialUser;
    switch (provider) {
      case 'google':
        socialUser = await this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
        break;
      case 'facebook':
        socialUser = await this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
        break;
      default:
        break;
    }

    const credential = {
      provider,
      providerId: socialUser.id
    }

    console.log('login result', socialUser);

    this.currentUserApi.linkSocial(credential).subscribe(result => {
      if (result) {
        this.snackbarsService.showSuccess(`Thành công! Từ bây giờ bạn có thể đăng nhập bằng ${provider}`);
      }
    })
  }
}
