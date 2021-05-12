import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { FirebaseAuthAddon, FirebaseAuthSocialAddon } from '../addons';
import { createUserFromFirebase, LoginCredential, FirebaseUser, ProviderType } from '../models';
import firebase from 'firebase/app';
import { AuthApi } from '../apis';
import { AuthRoutingGear } from './auth-routing.gear';
import { FirebaseAuthGear } from './firebase-auth.gear';
import { SnackbarsService } from '@awread/global/packages';
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Injectable({ providedIn: 'root' })
export class LoginGear {
  constructor(
    private firebaseAuthAddon: FirebaseAuthAddon,
    private authApi: AuthApi,
    private authRoutingGear: AuthRoutingGear,
    private firebaseAuthGear: FirebaseAuthGear,
    private snackbarService: SnackbarsService,
    private socialAuthService: SocialAuthService
  ) {
  }

  loginWithRoleAdmin(credential: LoginCredential) {
    this.loginEmail(credential)
      .then(async (res) => {
        // console.log('user', res.user);
        // this.authApi.setCustomClaimsToken(await res.user.getIdToken());
      })
      .catch((err) => console.log(err));
  }

  async loginEmail(credential: LoginCredential) {
    this.authApi.authenticateUser(credential).subscribe(result => {
      console.log('result', result);
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

  async loginSocial(provider: ProviderType) {
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

    console.log('login result', socialUser);

    this.authApi.authenticateSocialUser({ provider, providerId: socialUser.id }).subscribe(result => {
      if (result.case == 'success') {
        localStorage.setItem('accessToken', result.accessToken);
        this.snackbarService.showSuccess(`Chúc bạn một ngày tốt lành! ${result.user.firstname ?? result.user.name}`);
        this.authRoutingGear.navigateAfterLoginComplete();
      } else {
        this.snackbarService.showError(`Tài khoản của bạn không tồn tại, vui lòng tạo tài khoản mới nhé!`);
        localStorage.setItem('accessToken', '');
        this.socialAuthService.signOut(true);
      }
    })
  }

  getCurrentUser() {
    return this.authApi.getCurrentUserIdAndRole();
  }

  private checkMustNewUserWhenLoginFaceBook(user) {
    this.authApi.checkEmailExistInDatabase(user.email).subscribe((res) => {
      if (
        res['data']['getUserBaseEmail'] &&
        res['data']['getUserBaseEmail'].results.length
      ) {
        this.authRoutingGear.navigateAfterLoginComplete();
      } else {
        this.authRoutingGear.navigateAfterLoginComplete(
          'register-complete',
          user
        );
      }
    });
  }
}
