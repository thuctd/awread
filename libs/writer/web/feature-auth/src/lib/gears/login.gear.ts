import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { FirebaseAuthAddon, FirebaseAuthSocialAddon } from '../addons';
import { createUserFromFirebase, EmailLoginCredential, FirebaseUser, ProviderType } from '../models';
import firebase from 'firebase/app';
import { AuthApi } from '../apis';
import { AuthRoutingGear } from './auth-routing.gear';
import { FirebaseAuthGear } from './firebase-auth.gear';

@Injectable({ providedIn: 'root' })
export class LoginGear {
  constructor(
    private firebaseAuthAddon: FirebaseAuthAddon,
    private firebaseAuthSocialAddon: FirebaseAuthSocialAddon,
    private authApi: AuthApi,
    private router: Router,
    private authRoutingGear: AuthRoutingGear,
    private firebaseAuthGear: FirebaseAuthGear
  ) { }

  loginWithRoleAdmin(credential: EmailLoginCredential) {
    this.loginEmail(credential)
      .then(async (res) => {
        console.log('user', res.user);
        this.authApi.setCustomClaimsToken(await res.user.getIdToken());
      })
      .catch((err) => console.log(err));
  }

  async loginEmail(credential: EmailLoginCredential) {
    try {
      const userCredential = await this.firebaseAuthAddon.loginWithEmail(
        credential
      );
      alert('Login thành công');
      this.authRoutingGear.navigateAfterLoginComplete('profile');
      console.log('userCredential', userCredential);
      return userCredential;
    } catch (err) {
      console.log('err', err);
      if (err.code === 'auth/user-not-found') {
        alert('Tài khoản không tồn tại!');
      } else if (err.code === 'auth/wrong-password') {
        alert('Mật khẩu không chính xác!');
      }
    }
  }

  async loginSocial(providerType: ProviderType) {
    switch (providerType) {
      case ProviderType.apple:
        try {
          const userCredential = await this.firebaseAuthAddon.loginWithApple();
          console.log('userCredential apple', userCredential);
        } catch (error) {
          console.log('error', error);
        }
        break;
      case ProviderType.facebook:
        try {
          const userCredential: any = await this.firebaseAuthAddon.loginWithFacebook();
          const newUser: Partial<FirebaseUser> = {
            ...userCredential.user,
            provider: 'facebook',
          };
          // check trường hợp google/facebook ghi đè account thì phải link lại provider password (account email/pw)
          const user = createUserFromFirebase(newUser);
          this.checkMustNewUserWhenLoginFaceBook(user);
        } catch (err) {
          this.firebaseAuthGear.linkAccountWithProviderFacebook(err);
        }
        break;
      case ProviderType.google:
        try {
          const userCredential: any = await this.firebaseAuthAddon.loginWithGoogle();
          const newUser: Partial<FirebaseUser> = {
            ...userCredential.user,
            provider: 'google',
          };
          const user = createUserFromFirebase(newUser);
          // vì google ghi đè lên tất cả tài khoản cùng email đã tạo trước đó,
          // nên phải check lại TH đã tạo email/password trước đó,
          // nếu đúng thì link lại với account google
          this.firebaseAuthGear.shouldLinkProviderPassword(
            user,
            firebase.auth().currentUser
          );
          return userCredential;
        } catch (err) {
          // this.linkAccount(err);
          console.log('google login error: ', err);
        }
        break;
      default:
        return null;
    }
    // this.getCurrentUser();
  }

  getCurrentUser() {
    this.authApi.getAllBooks();
    return this.authApi.getCurrentUserIdAndRole();
  }

  private checkMustNewUserWhenLoginFaceBook(user) {
    this.authApi.checkEmailExistInDatabase(user.email).subscribe((res) => {
      if (
        res['data']['getUserBaseEmail'] &&
        res['data']['getUserBaseEmail'].results.length
      ) {
        this.authRoutingGear.navigateAfterLoginComplete('profile');
      } else {
        this.authRoutingGear.navigateAfterLoginComplete(
          'register-complete',
          user
        );
      }
    });
  }
}
