import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { ProviderType } from '../models';

@Injectable({ providedIn: 'root' })
export class FirebaseAuthAddon {
  idToken$ = this.afAuth.idToken;
  idTokenResult$ = this.afAuth.idTokenResult;
  idToken = null;

  constructor(
    public afAuth: AngularFireAuth,
  ) {
    this.idToken$.subscribe(idToken => this.idToken = idToken);
  }

  async checkMail(email: string) {
    const result = await this.afAuth.fetchSignInMethodsForEmail(email) as ProviderType[];
    return result[0];
  }

  addElement() {
    const node = document.createElement("div");
    node.setAttribute("id", "firebase-captcha");
    node.setAttribute("style", "visibility: hidden");
    document.body.appendChild(node);
  }

  async loginWithPhone(phone) {
    this.addElement();
    const windowRef: any = window;
    try {
      if (windowRef.recaptchaVerifier) {
        const ele = document.getElementById('firebase-captcha');
        console.log('recapcha already have', windowRef.recaptchaVerifier, ele);
        await windowRef.recaptchaVerifier.clear();
        if (ele) {
          // ele.innerHTML = '';
          // ele.innerHTML = '<div id="recaptcha-container"></div>';
          ele.remove();
          this.addElement();
        }
      } else {
        console.log('recapcha new');
      }
      windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('firebase-captcha', {
        size: 'invisible'
      });
    } catch (error) {
      console.warn(error);
      throw error;
    }
    const confirmationResult = await this.afAuth.signInWithPhoneNumber(phone, windowRef.recaptchaVerifier);
    return confirmationResult;
  }

  async loginWithEmail(credential) {
    return await this.afAuth.signInWithEmailAndPassword(credential.email, credential.password);
  }

  async registerWithEmail(credential) {
    return await this.afAuth.createUserWithEmailAndPassword(credential.email, credential.password);
  }

  async logout() {
    await this.afAuth.signOut();
  }

  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  loginWithGithub() {
    const provider = new firebase.auth.GithubAuthProvider();
    // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    return this.oAuthLogin(provider);
  }

  loginWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('public_profile,email');
    return this.oAuthLogin(provider);
  }

  loginWithTwitter() {
    const provider = new firebase.auth.TwitterAuthProvider();
    return this.oAuthLogin(provider);
  }

  loginWithApple() {
    const provider = new firebase.auth.OAuthProvider('apple.com');
    provider.addScope('email');
    provider.addScope('name');
    return this.oAuthLogin(provider);
  }

  async forgotPassword(emailAddress) {
    return await this.afAuth.sendPasswordResetEmail(emailAddress);
  }

  private async oAuthLogin(provider: firebase.auth.AuthProvider) {
    return await this.afAuth.signInWithPopup(provider);
  }

  async resetEmail(email) {
    return await this.afAuth.sendPasswordResetEmail(email);
  }

}
