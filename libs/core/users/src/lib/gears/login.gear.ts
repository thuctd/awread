import { Injectable } from '@angular/core';
import { SocialLoginCredential } from '../models';
import { AuthApi } from '../apis';
import { AuthRoutingGear } from './auth-routing.gear';
import { SnackbarService } from '@awread/global/packages';
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { CurrentUserGear } from './current-user.gear';
import { MatDialog } from '@angular/material/dialog';
import { domainEnvironment } from '@awread/global/environments';

@Injectable({ providedIn: 'root' })
export class LoginGear {
  constructor(
    private authApi: AuthApi,
    private authRoutingGear: AuthRoutingGear,
    private snackbarService: SnackbarService,
    private socialAuthService: SocialAuthService,
    private currentUserGear: CurrentUserGear,
    private matDialog: MatDialog
  ) {
  }

  async loginEmail(credential: SocialLoginCredential) {
    this.authApi.authenticateUser(credential).subscribe(result => {
      switch (result.case) {
        case 'success':
          this.loginSuccess(result);
          break;
        case 'password-not-match':
          this.snackbarService.showWarning(`Mật khẩu không khớp! Bạn có phải là: ${result.user.firstname ?? result.user.name}`);
          break;
        default:
          this.loginFail();
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
        this.loginSuccess(result);
      } else {
        this.loginFail();
        this.socialAuthService.signOut(true);
      }
    })
  }

  loginSuccess(result) {
    localStorage.setItem('accessToken', result?.accessToken);
    this.currentUserGear.getCurrentUser().subscribe(() => {
      this.snackbarService.showSuccess(`Chúc bạn một ngày tốt lành! ${result.user.firstname ?? result.user.name ?? ''}`);
      this.authRoutingGear.navigateAfterLoginComplete();
    });
    this.matDialog.closeAll();

    if (domainEnvironment.reader) {
      // open tab: 
      const iframe = document.createElement('iframe');
      iframe.setAttribute("id", "iframe-element");
      iframe.style.display = "none";
      let origin = window.location.origin.replace('://', '://w.');
      if (window.location.hostname == "localhost") {
        origin = 'http://localhost:2200';
        console.log('open iframe at', origin);
      }

      iframe.src = `${origin}/login?accessToken=${result?.accessToken}`;
      document.body.appendChild(iframe);
      setTimeout(() => {
        const element = document.getElementById('iframe-element');
        element.parentNode.removeChild(element);
      }, 3000);

    }
  }

  loginFail() {
    this.snackbarService.showError(`Tài khoản của bạn không tồn tại, vui lòng tạo tài khoản mới nhé!`);
    localStorage.setItem('accessToken', '');
  }

}
