import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Directive, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthFacade } from '../../facades';
import { ProviderType } from '../../models';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class LoginRegisterPage {
  selectedTab: 'login' | 'register' = 'login';
  authForm: FormGroup;
  tabs = [
    { name: 'Đăng nhập', path: 'login' },
    { name: 'Đăng kí', path: 'register' },
  ];

  currentUser$ = this.authFacade.currentUser$;
  constructor(
    private authFacade: AuthFacade,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
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
    this.authFacade.registerEmail(this.authForm.value);
  }

  login(provider: 'email' | 'facebook' | 'google' | 'apple') {
    // debugger
    console.log('provider', provider);
    console.log('form Value', this.authForm.value);
    if (this.selectedTab === 'login') {
      // this.authFacade.signin(provider, this.form.value);
      switch (provider) {
        case 'email':
          this.authFacade.loginEmail(this.authForm.value);
          break;

        case 'apple':
          this.authFacade.loginSocials(ProviderType.apple);
          break;
        case 'facebook':
          this.authFacade.loginSocials(ProviderType.facebook);
          break;
        case 'google':
          this.authFacade.loginSocials(ProviderType.google);
          break;
        default:
          break;
      }
    }
  }

  logout() {
    this.authFacade.logout();
  }

  private initForm() {
    this.authForm = this.fb.group({
      displayName: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: [''],
    });
  }
}
