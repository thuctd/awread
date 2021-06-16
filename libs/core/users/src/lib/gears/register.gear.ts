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
import { mergeMap, tap } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class RegisterGear {
  constructor(
    private authApi: AuthApi,
    private currentUserStore: CurrentUserStore,
    private snackbarService: SnackbarService,
    private currentUserGear: CurrentUserGear,
    private router: Router
  ) { }

  createNewAccount(requiredForm, optionalForm, experienceForm) {
    this.authApi.registerUser(requiredForm).subscribe((result) => {
      if (result.case == 'success') {
        this.registerSuccess(result);
        this.currentUserGear.getCurrentUser()
          .pipe(
            tap(value => console.log('hello new user', value)),
          )
          .subscribe(value => {
            this.createPersonal(optionalForm, experienceForm);
          });
      } else {
        this.registerFail(result);
      }
    });
  }

  createPersonal(optionalForm, experienceForm) {
    return this.currentUserGear.updatePersonal({
      ...optionalForm,
      ...experienceForm,
    }, 'create');
  }

  registerSuccess(result) {
    this.snackbarService.showSuccess(`Tạo tài khoản thành công!`);
    localStorage.setItem('accessToken', result?.accessToken);
    this.currentUserStore.update({ userId: result.userId });
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
