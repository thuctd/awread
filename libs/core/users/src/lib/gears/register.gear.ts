import { Injectable } from '@angular/core';
import { CreateUserCredential } from '../models';
import firebase from 'firebase/app';
import { AuthApi } from '../apis';
import { SnackbarsService } from '@awread/global/packages';
import { CurrentUserStore } from '../states/current-user';
import { AuthRoutingGear } from './auth-routing.gear';
import { MatDialog } from '@angular/material/dialog';
import { CurrentUserGear } from './current-user.gear';

@Injectable({ providedIn: 'root' })
export class RegisterGear {
  userCredential: firebase.auth.UserCredential | null = null;
  constructor(
    private authApi: AuthApi,
    private currentUserStore: CurrentUserStore,
    private snackbarService: SnackbarsService,
    private authRoutingGear: AuthRoutingGear,
    private matDialog: MatDialog,
    private currentUserGear: CurrentUserGear,
  ) { }


  async registerEmail(credential: CreateUserCredential) {
    this.authApi.registerUser(credential).subscribe(result => {
      if (result.case == 'success') {
        this.registerSuccess(result);
      } else {
        this.registerFail(result);
      }
    });
  }

  registerSuccess(result) {
    this.snackbarService.showSuccess(`Tạo tài khoản thành công!`);
    localStorage.setItem('accessToken', result?.accessToken);
    this.currentUserGear.getCurrentUser().subscribe();
    this.currentUserStore.update({ userId: result.userId });
    this.authRoutingGear.navigateAfterCreateAccount();
    this.matDialog.closeAll();
  }

  registerFail(result) {
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

}
