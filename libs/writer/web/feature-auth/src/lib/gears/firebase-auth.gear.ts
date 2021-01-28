import { AngularFireAuth } from '@angular/fire/auth';
import { AuthRoutingGear } from './auth-routing.gear';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { AuthApi } from '../apis';
import { forkJoin, of } from 'rxjs';
import { tap, catchError, retry } from 'rxjs/operators';
import { createUserFromFirebase, FirebaseUser } from '../models';
import { FirebaseAuthSocialAddon } from '../addons';
import { SnackbarsService } from '@awread/global/packages';

@Injectable({ providedIn: 'root' })
export class FirebaseAuthGear {
  constructor(
    private authApi: AuthApi,
    private router: Router,
    private firebaseAuthSocialAddon: FirebaseAuthSocialAddon,
    private authRoutingGear: AuthRoutingGear,
    private afAuth: AngularFireAuth,
    private snackbarService: SnackbarsService
  ) { }

  shouldLinkProviderPassword(userAccount, currentUser: firebase.User) {
    return this.authApi
      .getUserBaseEmail(userAccount.email)
      .subscribe(async (res) => {
        if (
          res.data &&
          res.data['getUserBaseEmail'] &&
          res.data['getUserBaseEmail']['results'].length
        ) {
          this.authRoutingGear.navigateAfterLoginComplete('list');
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
          this.authRoutingGear.navigateAfterLoginComplete(
            'register-complete',
            userAccount
          );
        }
      });
  }

  async confirmPasswordReset(code: string, password: string) {
    try {
      const email = window.localStorage.getItem('email_reset_password');
      forkJoin([
        this.afAuth.confirmPasswordReset(code, password),
        this.authApi.updatePassword(email, password),
      ])
        .pipe(
          tap(() => {
            window.localStorage.removeItem('email_reset_password');
            this.snackbarService.create('Reset password thành công!');
            this.router.navigate(['login']);
          }),
          catchError((err) => {
            this.snackbarService.error(
              'Reset password xảy ra lỗi. Vui lòng thử lại!'
            );
            return of(err);
          }),
          retry(2)
        )
        .subscribe();
      // const result = await this.afAuth.confirmPasswordReset(code, password);
      // console.log('change password result: ', result);
    } catch (error) {
      console.log('change password error: ', error);
    }
  }

  // createAccountOnServer(user) {
  //   // send data to server
  //   this.authApi.createAccountOnServer(user).subscribe((status) => {
  //     console.log('status new user', status);
  //     // this.actionAfterCreateAccountSuccess();
  //   });
  // }

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
        this.firebaseAuthSocialAddon.supportedPopupSignInMethods.includes(p)
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

  linkAccountFacebookToProviderPassword(err) {
    return this.authApi.getUserBaseEmail(err.email).subscribe(async (res) => {
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

  async linkAccountFacebookToProviderGoogle(err, provider) {
    const linkedProvider: any = this.firebaseAuthSocialAddon.getProvider(
      provider
    );
    linkedProvider.setCustomParameters({ login_hint: err.email });

    const result: any = await firebase.auth().signInWithPopup(linkedProvider);
    console.log('result', result);
    try {
      await result.user.linkWithCredential(err.credential);
      const newUser: Partial<FirebaseUser> = {
        ...result.user,
        photoUrl: result.user.photoURL ?? '',
      };
      // check trường hợp google/facebook ghi đè account thì phải link lại provider password (account email/pw)
      const user = createUserFromFirebase(newUser);
      this.shouldLinkProviderPassword(user, result.user);
    } catch (error) {
      this.snackbarService.error(
        'Đăng nhập facebook bị lỗi. Vui lòng thử lại!'
      );
    }
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
        this.snackbarService.error('Tài khoản đã tồn tại!');
        return;
      }
      const linkedProvider: any = this.firebaseAuthSocialAddon.getProvider(
        providers[0]
      );
      linkedProvider.setCustomParameters({ login_hint: user.email });
      const result = await firebase.auth().signInWithPopup(linkedProvider);
      const linkWithCredential = await result.user.linkWithCredential(
        credential
      );
      if (linkWithCredential) {
        this.authRoutingGear.navigateAfterLoginComplete('list');
      }
      // if (linkWithCredential.user) {
      //   // update password when account Googleor/FB exists.
      //   this.authApi
      //     .updatePassword(user.email, user.password, 'update-new')
      //     .subscribe();
      // }
      console.log('linkWithCredential', linkWithCredential);
    } catch (error) {
      console.log('link with gg/fb error: ', error);
    }
  }

  async sendLinkResetPassword(email: string) {
    try {
      const result = await this.afAuth.sendPasswordResetEmail(email);
      console.log('reset password result: ', result);
    } catch (error) {
      console.log('error reset pw: ', error);
    }
  }
}
