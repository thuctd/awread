import { Injectable } from '@angular/core';
import { CreateUserCredential } from '../models';
import { AuthApi } from '../apis';
import { SnackbarService } from '@awread/global/packages';
import { CurrentUserStore } from '../states/current-user';
import { AuthRoutingGear } from './auth-routing.gear';
import { MatDialog } from '@angular/material/dialog';
import { CurrentUserGear } from './current-user.gear';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';
@Injectable({ providedIn: 'root' })
export class RegisterGear {
  constructor(
    private authApi: AuthApi,
    private currentUserStore: CurrentUserStore,
    private snackbarService: SnackbarService,
    private matDialog: MatDialog,
    private currentUserGear: CurrentUserGear,
    private router: Router
  ) {}

  createNewAccount(requiredForm, optionalForm, experienceForm) {
    this.authApi.registerUser(requiredForm).subscribe((result) => {
      if (result.case == 'success') {
        this.registerSuccess(result);
        this.updatePersonal(optionalForm, experienceForm);
      } else {
        this.registerFail(result);
      }
    });
  }

  updatePersonal(optionalForm, experienceForm) {
    this.currentUserGear.updatePersonal({
      ...optionalForm,
      ...experienceForm,
    });
  }

  registerSuccess(result) {
    this.snackbarService.showSuccess(`Tạo tài khoản thành công!`);
    localStorage.setItem('accessToken', result?.accessToken);
    this.currentUserGear.getCurrentUser().subscribe();
    this.currentUserStore.update({ userId: result.userId });
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

  async connectProviderAndGoToRegister(provider) {
    let credential;
    switch (provider) {
      case 'facebook':
        credential = await this.currentUserGear.connectSocialNewAccount(provider);
        break;
      case 'google':
        credential = await this.currentUserGear.connectSocialNewAccount(provider);
        break;
      default:
        break;
    }
    this.currentUserStore.update({ registerCredential: credential });
    this.router.navigateByUrl('/register');
  }
}
