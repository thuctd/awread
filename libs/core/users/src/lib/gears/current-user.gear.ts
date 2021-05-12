import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import type { CurrentUser } from '../models';
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
      tap(result => {
        console.log('result', result);
        this.currentUserStore.update(result);
      })
    )
  }

  update(user: CurrentUser) {
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


  async linkSocial(provider) {
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
