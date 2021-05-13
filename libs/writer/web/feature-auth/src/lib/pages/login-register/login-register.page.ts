import { FormBuilder } from '@angular/forms';
import { Directive, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthFacade, LoginRegisterIpage } from '@awread/core/users';
import { SnackbarsService } from '@awread/global/packages';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class LoginRegisterPage extends LoginRegisterIpage {
  constructor(
    public authFacade: AuthFacade,
    public activatedRoute: ActivatedRoute,
    public fb: FormBuilder,
    public snackbarService: SnackbarsService
  ) {
    super(authFacade, activatedRoute, fb, snackbarService)
  }

}