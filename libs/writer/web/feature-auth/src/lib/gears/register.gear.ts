import { AuthRoutingGear } from './auth-routing.gear';
import { FirebaseAuthGear } from './firebase-auth.gear';
import { Injectable } from '@angular/core';
import { FirebaseAuthAddon } from '../addons';
import {
  BasicCredential,
  createUserFromFirebase,
  FirebaseUser,
} from '../models';
import firebase from 'firebase/app';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AuthApi } from '../apis';
import { SnackbarsService } from '@awread/global/packages';
@Injectable({ providedIn: 'root' })
export class RegisterGear {
  userCredential: firebase.auth.UserCredential | null = null;
  constructor(
    private firebaseAuthAddon: FirebaseAuthAddon,
    private authApi: AuthApi,
    private firebaseAuthGear: FirebaseAuthGear,
    private authRoutingGear: AuthRoutingGear,
    private snackbarService: SnackbarsService
  ) {}

  async registerEmail(credential: BasicCredential) {
    try {
      const userCredential: any = await this.firebaseAuthAddon.registerWithEmail(
        credential
      );
      const newUser: Partial<FirebaseUser> = {
        ...userCredential.user,
        provider: 'email/password',
      };
      const user = createUserFromFirebase(newUser);
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
      tap((res) => {
        this.snackbarService.create('Tạo tài khoản thành công');
      }),
      catchError((err) => {
        console.log('error', err);
        this.snackbarService.error('Đã xảy ra lỗi. Vui lòng thử lại!!', 5000);
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
