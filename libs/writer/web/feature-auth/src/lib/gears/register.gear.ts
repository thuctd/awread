import { AuthRoutingGear } from './auth-routing.gear';
import { FirebaseAuthGear } from './firebase-auth.gear';
import { Injectable } from '@angular/core';
import { FirebaseAuthAddon } from '../addons';
import { CreateUserCredential, createUserFromFirebase, FirebaseUser, ProviderType } from '../models';
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

    private snackbarService: SnackbarsService,

  ) { }


  async registerEmail(credential: CreateUserCredential) {
    this.authApi.registerUser(credential).subscribe(result => {
      if (result.case == 'success') {
        this.snackbarService.showSuccess(`Tạo tài khoản thành công!`);
      } else {
        let text;
        switch (result.duplicateKey) {
          case 'username':
            text = 'username';
            break;
          case 'email':
            text = 'địa chỉ email';
            break;
          case 'phone':
            text = 'số điện thoại';
            break;

          default:
            break;
        }
        this.snackbarService.showError(`Tài khoản đã tồn tại với ${text} là: ${result.duplicateValue}`);

      }
    });
    // try {
    //   const userCredential: any = await this.firebaseAuthAddon.registerWithEmail(
    //     credential
    //   );
    //   const newUser: Partial<FirebaseUser> = {
    //     ...userCredential.user,
    //     displayName: credential.displayName ?? '',
    //     password: credential.password ?? '',
    //     provider: 'email/password',
    //     photoUrl: userCredential.user.photoURL ?? '',
    //   };
    //   const user = createUserFromFirebase(newUser);
    //   this.createAccountOnServer(user).subscribe(() => {
    //     this.authRoutingGear.navigateAfterRegisterComplete('profile');
    //   });
    // } catch (err) {
    //   console.log('login with email/pw error: ', err);
    //   if (err.code === 'auth/email-already-in-use') {
    //     // TH tạo email đã tồn tại, thì link email này tới provider google hoặc facebook đã tạo trước đó
    //     // Link xong là có thể đăng nhập với email/pass vừa mới link
    //     this.linkToProviderGoogleorFacebook(credential);
    //   }
    // }
  }

  linkToProviderGoogleorFacebook(user) {
    this.firebaseAuthGear.linkToProviderGoogleorFacebook(user);
  }

  createAccountOnServer(user) {
    return this.authApi.createAccountOnServer(user).pipe(
      tap((res) => {
        this.snackbarService.showSuccess('Tạo tài khoản thành công');
      }),
      catchError((err) => {
        console.log('error', err);
        this.snackbarService.showError('Đã xảy ra lỗi. Vui lòng thử lại!!');
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
