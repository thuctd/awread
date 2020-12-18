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

  ) {
  }

  async registerEmail(basicCredential: BasicCredential) {
    this.userCredential = await this.firebaseAuthAddon.registerWithEmail(basicCredential);
    this.createAccountOnServer(basicCredential);
  }

  async registerSocial(providerType: ProviderType) {
    this.userCredential = await this.firebaseAuthSocialAddon.loginWithProvider(providerType);
    this.routingToPersonalInfoPageIfSocial();
  }

  private routingToPersonalInfoPageIfSocial() {
    // routing to somewhere to enter email and password for social login
  }

  createAccountOnServer(credential: BasicCredential) {
    // send data to server
    this.actionAfterCreateAccountSuccess();
  }

  private actionAfterCreateAccountSuccess() {
    // routing to dashboard
  }

}
