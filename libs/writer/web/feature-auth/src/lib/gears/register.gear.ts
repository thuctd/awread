import { Router } from '@angular/router';
import { AuthApi } from './../apis/auth.api';
import { Injectable } from '@angular/core';
import { FirebaseAuthAddon, FirebaseAuthSocialAddon } from '../addons';
import { BasicCredential, ProviderType } from '../models';
import firebase from 'firebase/app';
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
    private router: Router
  ) {}

  async registerEmail(credential: BasicCredential) {
    try {
      const userCredential = await this.firebaseAuthAddon.registerWithEmail(
        credential
      );
      const user = this.firebaseAuthAddon.createUserObject({
        ...userCredential.user,
        provider: 'email/password',
      });
      this.createAccountOnServer(user);
      this.router.navigate(['login']);
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
    this.firebaseAuthSocialAddon.linkToProviderGoogleorFacebook(user);
  }

  createAccountOnServer(user) {
    return this.authApi.createAccountOnServer(user);
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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-info',
  template: ` <div>Hello</div> `,
})
export class InfoUserComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
