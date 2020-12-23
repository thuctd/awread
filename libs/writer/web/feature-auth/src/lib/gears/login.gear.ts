import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { FirebaseAuthAddon, FirebaseAuthSocialAddon } from '../addons';
import { EmailLoginCredential, ProviderType } from '../models';
import firebase from 'firebase/app';
import { AuthApi } from '../apis';

@Injectable({ providedIn: 'root' })
export class LoginGear {
  constructor(
    private firebaseAuthAddon: FirebaseAuthAddon,
    private firebaseAuthSocialAddon: FirebaseAuthSocialAddon,
    private authApi: AuthApi,
    private router: Router
  ) {}

  loginWithRoleAdmin(credential: EmailLoginCredential) {
    this.loginEmail(credential)
      .then(async (res: any) => {
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
      this.router.navigate(['profile']);
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
          const userCredential = await this.firebaseAuthAddon.loginWithFacebook();
          const user = this.createUserObject({
            ...userCredential.user,
            provider: 'facebook',
          });
          this.authApi
            .checkEmailExistInDatabase(userCredential.user.email)
            .subscribe((res) => {
              if (
                res['data']['getUserBaseEmail'] &&
                res['data']['getUserBaseEmail'].results.length
              ) {
                this.router.navigate(['profile']);
              } else {
                this.router.navigate(['register-complete', user]);
              }
            });
          this.firebaseAuthSocialAddon.createAccountOnServer({
            ...userCredential.user,
            provider: 'facebook',
          });
        } catch (err) {
          this.firebaseAuthSocialAddon.linkAccountWithProviderFacebook(err);
        }
        break;
      case ProviderType.google:
        try {
          const userCredential = await this.firebaseAuthAddon.loginWithGoogle();
          const user = this.createUserObject({
            ...userCredential.user,
            provider: 'google',
          });
          // vì google ghi đè lên tất cả tài khoản cùng email đã tạo trước đó,
          // nên phải check lại TH đã tạo email/password trước đó,
          // nếu đúng thì link lại với account google
          this.firebaseAuthSocialAddon.shouldLinkProviderPassword(
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
    return this.authApi.getCurrentUser();
  }

  private createUserObject(user) {
    return {
      displayname: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified.toString(),
      photoUrl: user.photoURL,
      uid: user.uid,
      provider: user.provider,
    };
  }
}
