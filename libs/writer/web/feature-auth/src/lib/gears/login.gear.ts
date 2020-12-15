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
  ) {
  }

  async loginEmail(credential: EmailLoginCredential) {
    const userCredential: firebase.auth.UserCredential = await this.firebaseAuthAddon.loginWithEmail(credential);
    this.getUserData();
  }

  async loginSocial(providerType: ProviderType) {
    const userCredential: firebase.auth.UserCredential = await this.firebaseAuthSocialAddon.loginWithProvider(providerType);
    this.getUserData();
  }

  getUserData() {
    this.authApi.getUserData();
  }

}
