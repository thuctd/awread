import { AuthRoutingGear } from './auth-routing.gear';
import { FirebaseAuthGear } from './firebase-auth.gear';
import { Router } from '@angular/router';
import { AuthApi } from './../apis/auth.api';
import { Injectable } from '@angular/core';
import { FirebaseAuthAddon, FirebaseAuthSocialAddon } from '../addons';
import { BasicCredential } from '../models';
import firebase from 'firebase/app';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
// userCredential.additionalUserInfo.isNewUser;
// userCredential.credential.providerId;
// userCredential.user.getIdToken();
@Injectable({ providedIn: 'root' })
export class RegisterGear {
  userCredential: firebase.auth.UserCredential | null = null;
  constructor(
    private firebaseAuthAddon: FirebaseAuthAddon,
    private firebaseAuthSocialAddon: FirebaseAuthSocialAddon,
    private authApi: AuthApi,
    private router: Router,
    private firebaseAuthGear: FirebaseAuthGear,
    private authRoutingGear: AuthRoutingGear
  ) {}

  async registerEmail(credential: BasicCredential) {
    try {
      const userCredential = await this.firebaseAuthAddon.registerWithEmail(
        credential
      );
      const user = this.firebaseAuthSocialAddon.createUserObject({
        ...userCredential.user,
        provider: 'email/password',
      });
      this.createAccountOnServer(user);
      this.authRoutingGear.navigateAfterRegisterComplete('login');
    } catch (err) {
      console.log('login with email/pw error: ', err);
      if (err.code === 'auth/email-already-in-use') {
        // TH tạo email đã tồn tại, thì link email này tới provider google hoặc facebook đã tạo trước đó
        // Link xong là có thể đăng nhập với email/pass vừa mới link
        this.linkToProviderGoogleorFacebook(credential);
      }
    }
  }

  linkToProviderGoogleorFacebook(user) {
    this.firebaseAuthGear.linkToProviderGoogleorFacebook(user);
  }

  createAccountOnServer(user) {
    return this.authApi.createAccountOnServer(user).pipe(
      catchError((err) => {
        console.log('error', err);
        return throwError(err);
      })
    );
  }

  // async registerSocial(providerType: ProviderType) {
  //   this.routingToPersonalInfoPageIfSocial();
  // }

  private routingToPersonalInfoPageIfSocial() {
    // routing to somewhere to enter email and password for social login
  }

  private actionAfterCreateAccountSuccess() {
    // routing to dashboard
  }
}
