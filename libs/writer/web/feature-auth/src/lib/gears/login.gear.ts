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
    // TODO: remove this 
    localStorage.setItem('accessToken', '');
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
      const accessToken = result?.data ? result.data['jwtToken'] : null;
      switch (result.case) {
        case 'success':
          localStorage.setItem('accessToken', accessToken);
          this.snackbarService.showSuccess(`Chúc bạn một ngày tốt lành! ${result.user.firstname ?? result.user.name}`);
          this.authRoutingGear.navigateAfterLoginComplete('list');
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
    // try {
    //   const userCredential = await this.firebaseAuthAddon.loginWithEmail(
    //     credential
    //   );
    //   this.snackbarService.showSuccess('Đăng nhập thành công!');
    //   this.authRoutingGear.navigateAfterLoginComplete('list');
    //   console.log('userCredential', userCredential);
    //   return userCredential;
    // } catch (err) {
    //   console.log('err', err);
    //   if (err.code === 'auth/user-not-found') {
    //     this.snackbarService.showError('Tài khoản không tồn tại!');
    //   } else if (err.code === 'auth/wrong-password') {
    //     this.snackbarService.showError('Mật khẩu không chính xác!');
    //   }
    // }
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
        localStorage.setItem('accessToken', result.jwtToken);
        this.snackbarService.showSuccess(`Chúc bạn một ngày tốt lành! ${result.user.firstname ?? result.user.name}`);
        this.authRoutingGear.navigateAfterLoginComplete('list');
      } else {
        this.snackbarService.showError(`Tài khoản của bạn không tồn tại, vui lòng tạo tài khoản mới nhé!`);
        localStorage.setItem('accessToken', '');
        this.socialAuthService.signOut(true);
      }
    })
    // switch (providerType) {
    //   case ProviderType.apple:
    //     try {
    //       const userCredential = await this.firebaseAuthAddon.loginWithApple();
    //       console.log('userCredential apple', userCredential);
    //     } catch (error) {
    //       console.log('error', error);
    //     }
    //     break;
    //   case ProviderType.facebook:
    //     try {
    //       const userCredential: any = await this.firebaseAuthAddon.loginWithFacebook();
    //       const newUser: Partial<FirebaseUser> = {
    //         ...userCredential.user,
    //         provider: 'facebook',
    //         photoUrl: userCredential.user.photoURL ?? '',
    //       };
    //       // check trường hợp google/facebook ghi đè account thì phải link lại provider password (account email/pw)
    //       const user = createUserFromFirebase(newUser);
    //       this.checkMustNewUserWhenLoginFaceBook(user);
    //     } catch (err) {
    //       this.firebaseAuthGear.linkAccountWithProviderFacebook(err);
    //     }
    //     break;
    //   case ProviderType.google:
    //     try {
    //       const userCredential: any = await this.firebaseAuthAddon.loginWithGoogle();
    //       const newUser: Partial<FirebaseUser> = {
    //         ...userCredential.user,
    //         provider: 'google',
    //         photoUrl: userCredential.user.photoURL ?? '',
    //       };
    //       const user = createUserFromFirebase(newUser);
    //       // vì google ghi đè lên tất cả tài khoản cùng email đã tạo trước đó,
    //       // nên phải check lại TH đã tạo email/password trước đó,
    //       // nếu đúng thì link lại với account google
    //       this.firebaseAuthGear.shouldLinkProviderPassword(
    //         user,
    //         firebase.auth().currentUser
    //       );
    //       return userCredential;
    //     } catch (err) {
    //       // this.linkAccount(err);
    //       console.log('google login error: ', err);
    //     }
    //     break;
    //   default:
    //     return null;
    // }
    // this.getCurrentUser();
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
        this.authRoutingGear.navigateAfterLoginComplete('list');
      } else {
        this.authRoutingGear.navigateAfterLoginComplete(
          'register-complete',
          user
        );
      }
    });
  }
}
