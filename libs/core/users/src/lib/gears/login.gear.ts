import { Injectable } from '@angular/core';
import { SocialLoginCredential } from '../models';
import { AuthApi } from '../apis';
import { AuthRoutingGear } from './auth-routing.gear';
import { SnackbarsService } from '@awread/global/packages';
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Injectable({ providedIn: 'root' })
export class LoginGear {
  constructor(
    private authApi: AuthApi,
    private authRoutingGear: AuthRoutingGear,
    private snackbarService: SnackbarsService,
    private socialAuthService: SocialAuthService
  ) {
  }

  async loginEmail(credential: SocialLoginCredential) {
    this.authApi.authenticateUser(credential).subscribe(result => {
      const accessToken = result?.accessToken;
      switch (result.case) {
        case 'success':
          localStorage.setItem('accessToken', accessToken);
          this.snackbarService.showSuccess(`Chúc bạn một ngày tốt lành! ${result.user.firstname ?? result.user.name ?? ''}`);
          this.authRoutingGear.navigateAfterLoginComplete();
          break;
        case 'password-not-match':
          this.snackbarService.showWarning(`Mật khẩu không khớp! Bạn có phải là: ${result.user.firstname ?? result.user.name}`);
          break;
        default:
          localStorage.setItem('accessToken', '');
          this.snackbarService.showError(`Tài khoản của bạn không tồn tại, vui lòng tạo tài khoản mới nhé!`);
          break;
      }
    })
  }

  async loginSocial(provider) {
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

    this.authApi.authenticateSocialUser({ provider, providerId: socialUser.id }).subscribe(result => {
      if (result.case == 'success') {
        this.snackbarService.showSuccess(`Chúc bạn một ngày tốt lành! ${result.user.firstname ?? result.user.name}`);
        this.authRoutingGear.navigateAfterLoginComplete();
      } else {
        this.snackbarService.showError(`Tài khoản của bạn không tồn tại, vui lòng tạo tài khoản mới nhé!`);
        localStorage.setItem('accessToken', '');
        this.socialAuthService.signOut(true);
      }
    })
  }

}
