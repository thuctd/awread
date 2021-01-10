import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthApi } from './../apis/auth.api';
import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import { ProviderType } from '../models';
import { FirebaseAuthAddon } from './firebase-auth.addon';

@Injectable({ providedIn: 'root' })
export class FirebaseAuthSocialAddon {
  supportedPopupSignInMethods = [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ];
  constructor(
    private firebaseAuthAddon: FirebaseAuthAddon,
    private authApi: AuthApi,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {}

  loginWithEmail(credential) {
    return this.firebaseAuthAddon.loginWithEmail(credential);
  }

  async registerWithEmail(credential) {
    try {
      const cre = await this.firebaseAuthAddon.registerWithEmail(credential);
      return cre;
    } catch (err) {
      throw new Error(err);
    }
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

  getProvider(providerId) {
    switch (providerId) {
      case firebase.auth.GoogleAuthProvider.PROVIDER_ID:
        return new firebase.auth.GoogleAuthProvider();
      case firebase.auth.FacebookAuthProvider.PROVIDER_ID:
        return new firebase.auth.FacebookAuthProvider();
      case firebase.auth.EmailAuthProvider.PROVIDER_ID:
        return new firebase.auth.EmailAuthProvider();
      default:
        throw new Error(`No provider implemented for ${providerId}`);
    }
  }
}
