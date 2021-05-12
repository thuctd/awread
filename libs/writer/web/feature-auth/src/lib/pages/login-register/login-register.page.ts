import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Directive, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthFacade } from '@awread/core/users';
import { SnackbarsService } from '@awread/global/packages';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class LoginRegisterPage {
  selectedTab: 'login' | 'register' = 'login';
  loginForm: FormGroup;
  registerForm: FormGroup;
  tabs = [
    { name: 'Đăng nhập', path: 'login' },
    { name: 'Đăng ký', path: 'register' },
  ];

  currentUser$ = this.authFacade.currentUser$;
  constructor(
    private authFacade: AuthFacade,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private snackbarService: SnackbarsService
  ) { }

  ngOnInit() {
    this.initForm();
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params.tab) {
        console.log('params: ', params);
        this.selectedTab = params.tab;
      }
    });
    // this.router.navigate(['register']);
  }

  register() {
    const { password, confirmPassword } = this.registerForm.value;
    if (password !== confirmPassword) {
      return this.snackbarService.showError('Mật khẩu không khớp. Vui lòng thử lại!');
    }
    this.authFacade.registerEmail(this.registerForm.value);
  }

  login(provider: 'email' | 'facebook' | 'google' | 'apple') {
    console.log('provider', provider);
    console.log('form Value', this.loginForm.value);
    if (this.selectedTab === 'login') {
      if (provider == 'email') {
        this.authFacade.loginEmail(this.loginForm.value);
      } else {
        this.authFacade.loginSocial(provider);
      }
    }
  }

  logout() {
    this.authFacade.logout();
  }

  private initForm() {
    this.loginForm = this.fb.group({
      loginname: ['', [Validators.required]],
      password: ['', Validators.required],
    });
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', []],
      phone: ['', []],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }
}
