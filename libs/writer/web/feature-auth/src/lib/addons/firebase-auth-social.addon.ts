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
    private router: Router
  ) {}

  async registerWithEmail(credential) {
    try {
      return await this.firebaseAuthAddon.registerWithEmail(credential);
    } catch (err) {
      throw err;
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

  shouldLinkProviderPassword(userAccount: any, currentUser: firebase.User) {
    return this.authApi
      .getUserBaseEmail(userAccount.email)
      .subscribe(async (res) => {
        console.log('curent user logged', res);
        if (
          res.data &&
          res.data['getUserBaseEmail'] &&
          res.data['getUserBaseEmail']['results'].length
        ) {
          this.router.navigate(['profile']);
          const user = res.data['getUserBaseEmail']['results'][0];
          if (user.provider === 'email/password') {
            const credential = firebase.auth.EmailAuthProvider.credential(
              user.email,
              user.password
            );
            try {
              const link = await currentUser.linkWithCredential(credential);
              console.log('Account linking success', link);
            } catch (error) {
              console.log('Account linking error', error);
            }
          }
        } else {
          this.router.navigate(['register-complete', userAccount]);
        }
      });
  }

  createAccountOnServer(user: any) {
    // send data to server
    this.authApi.createAccountOnServer(user).subscribe((status) => {
      console.log('status new user', status);
      // this.actionAfterCreateAccountSuccess();
    });
  }

  async linkAccountWithProviderFacebook(err) {
    if (
      err.email &&
      err.credential &&
      err.code === 'auth/account-exists-with-different-credential'
    ) {
      const providers = await firebase
        .auth()
        .fetchSignInMethodsForEmail(err.email);
      console.log('providers', providers);
      const firstPopupProviderMethod = providers.find((p) =>
        this.supportedPopupSignInMethods.includes(p)
      );
      // Test: Could this happen with email link then trying social provider?
      if (!firstPopupProviderMethod) {
        throw new Error(
          `Your account is linked to a provider that isn't supported.`
        );
      }
      if (providers.includes('google.com')) {
        this.linkAccountFacebookToProviderGoogle(err, firstPopupProviderMethod);
      } else {
        // là provider email/password
        this.linkAccountFacebookToProviderPassword(err);
      }
    }

    // Handle errors...
    // toast.error(err.message || err.toString());
  }

  async linkAccountFacebookToProviderGoogle(err, provider) {
    const linkedProvider: any = this.getProvider(provider);
    linkedProvider.setCustomParameters({ login_hint: err.email });

    const result = await firebase.auth().signInWithPopup(linkedProvider);
    console.log('result', result);
    try {
      await result.user.linkWithCredential(err.credential);
      // check trường hợp google/facebook ghi đè account thì phải link lại provider password (account email/pw)
      this.shouldLinkProviderPassword(result.user.email, result.user);
    } catch (error) {}
  }

  linkAccountFacebookToProviderPassword(err) {
    return this.authApi.getUserBaseEmail(err.email).subscribe(async (res) => {
      console.log('curent user logged', res);
      if (
        res.data &&
        res.data['getUserBaseEmail'] &&
        res.data['getUserBaseEmail']['results'].length
      ) {
        const user = res.data['getUserBaseEmail']['results'][0];
        if (user.provider === 'email/password') {
          try {
            const usercred = await firebase
              .auth()
              .signInWithEmailAndPassword(user.email, user.password);
            const link = await usercred.user.linkWithCredential(err.credential);
            console.log('Account linking success', link);
          } catch (error) {
            console.log('Account linking error', error);
          }
        }
      }
    });
  }
  async linkToProviderGoogleorFacebook(user) {
    try {
      const credential = firebase.auth.EmailAuthProvider.credential(
        user.email,
        user.password
      );
      const providers = await firebase
        .auth()
        .fetchSignInMethodsForEmail(user.email);
      if (providers.includes('password')) {
        alert('Tài khoản đã tồn tại!');
        return;
      }
      const linkedProvider: any = this.getProvider(providers[0]);
      linkedProvider.setCustomParameters({ login_hint: user.email });
      const result = await firebase.auth().signInWithPopup(linkedProvider);
      const linkWithCredential = await result.user.linkWithCredential(
        credential
      );
      if (linkWithCredential.user) {
        // update password when account Googleor/FB exists.
        this.authApi
          .updatePassword(user.email, user.password, 'update-new')
          .subscribe();
      }
      console.log('linkWithCredential', linkWithCredential);
    } catch (error) {
      console.log('link with gg/fb error: ', error);
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
