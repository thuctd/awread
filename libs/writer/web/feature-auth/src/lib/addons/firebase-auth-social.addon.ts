import { Injectable } from '@angular/core';
import { ProviderType } from '../models';
import { FirebaseAuthAddon } from './firebase-auth.addon';

@Injectable({ providedIn: 'root' })
export class FirebaseAuthSocialAddon {

  constructor(
    private firebaseAuthAddon: FirebaseAuthAddon
  ) {
  }

  async loginWithProvider(providerType: ProviderType) {
    switch (providerType) {
      case ProviderType.apple:
        return await this.firebaseAuthAddon.loginWithApple();
      case ProviderType.facebook:
        return await this.firebaseAuthAddon.loginWithFacebook();
      case ProviderType.google:
        return await this.firebaseAuthAddon.loginWithGoogle();
      default:
        return null;
    }
  }

}
