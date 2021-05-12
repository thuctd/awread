import { Injectable } from '@angular/core';
import { CreateUserCredential } from '../models';
import firebase from 'firebase/app';
import { AuthApi } from '../apis';
import { SnackbarsService } from '@awread/global/packages';
import { CurrentUserStore } from '../states/current-user';

@Injectable({ providedIn: 'root' })
export class RegisterGear {
  userCredential: firebase.auth.UserCredential | null = null;
  constructor(
    private authApi: AuthApi,
    private currentUserStore: CurrentUserStore,
    private snackbarService: SnackbarsService,

  ) { }


  async registerEmail(credential: CreateUserCredential) {
    this.authApi.registerUser(credential).subscribe(result => {
      if (result.case == 'success') {
        this.snackbarService.showSuccess(`Tạo tài khoản thành công!`);
        this.currentUserStore.update({ userId: result.userId })
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
  }

}
