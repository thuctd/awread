import { map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import type { CurrentUser } from '../models';
import { CurrentUserService, CurrentUserStore } from '../states/current-user';
import { CurrentUserApi } from '../apis';
import { SnackbarService } from '@awread/global/packages';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { Location } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class CurrentUserGear {
  constructor(
    private currentUserApi: CurrentUserApi,
    private currentUserStore: CurrentUserStore,
    private snackbarService: SnackbarService,
    private socialAuthService: SocialAuthService,
    private location: Location
  ) { }

  getCurrentUser() {
    return this.currentUserApi.getCurrentUser().pipe(
      tap((result) => {
        // console.log('result', result);
        this.currentUserStore.update(result);
      })
    );
  }

  updateUser(user: CurrentUser) {
    if (user.updatedAt) {
      this.currentUserStore.update({ updatedAt: user.updatedAt });
    }
    return this.currentUserApi
      .updateUser(user)
      .pipe()
      .subscribe((result) => {
        if (result.data) {
          this.snackbarService.showSuccess('Cập nhật thông tin tài khoản thành công!');
          this.currentUserStore.updateCurrentUserAkita(user);
        } else {
          this.snackbarService.showError(result.errors?.[0]['message']);
        }
      });
  }

  updatePersonal(user, action: 'create' | 'update' = 'update') {
    return this.currentUserApi
      .updatePersonal(user, action)
      .pipe()
      .subscribe((result) => {
        if (result.data) {
          this.snackbarService.showSuccess('Cập nhật thông tin cá nhân thành công!');
          this.currentUserStore.updateCurrentUserAkita(user);
          // this.authRoutingGear.navigateAfterRegisterCompleted();
        } else {
          this.snackbarService.showError(result.errors?.[0]['message']);
        }
      }, error => {
        console.warn('error', error.message);
        if (error.message.includes('because no values you can update were found')) {
          this.updatePersonal(user, 'create');
        }
      });
  }

  async connectSocialNewAccount(provider) {
    let socialUser: SocialUser;
    try {
      await this.socialAuthService.signOut();
    } catch (error) {
      console.log();
    }

    try {
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
    } catch (error) {
      console.warn('social login error', error);
      throw error;
    }

    const credential = {
      provider,
      providerId: socialUser.id,
      socialUser,
    };

    console.log('login result', socialUser);

    return credential;
  }

  async linkSocial(provider) {
    const credential = await this.connectSocialNewAccount(provider);

    this.currentUserApi.linkSocial(credential).subscribe((result) => {
      if (result) {
        this.snackbarService.showSuccess(`Thành công! Từ bây giờ bạn có thể đăng nhập bằng ${provider}`);
      }
    });
  }

  agreeBecomeWriter() {
    return this.currentUserApi.updateRole('writer').subscribe(role => {
      this.currentUserStore.update({ role });
      this.currentUserApi.refreshToken().subscribe(token => {
        localStorage.setItem('accessToken', token);
        location.reload();
      });
    })
  }
}
