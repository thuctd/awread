import { retry, tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Directive, Injectable, OnInit } from '@angular/core';
import { AuthFacade } from '@awread/writer/web/feature-auth';
import { of } from 'rxjs';
import { SnackbarsService } from '@awread/global/packages';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class RegisterCompletePage implements OnInit {
  formComplete: FormGroup;
  user: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private authFacade: AuthFacade,
    private router: Router,
    private snackbarService: SnackbarsService
  ) {}

  ngOnInit(): void {
    this.user = this.activatedRoute.snapshot.params;
    console.log('user', this.user);
    this.initForm();
    this.updateForm();
  }

  completeRegister() {
    const user = {
      ...this.user,
      password: this.formComplete.get('password').value,
      provider: 'email/password',
    };

    // link o day nha
    // console.log('create user: ', user);
    this.authFacade
      .createAccountOnServer(user)
      .pipe(
        tap(() => {
          this.authFacade.linkToProviderGoogleorFacebook(user);
        }),
        catchError((err) => {
          this.snackbarService.error('Đã xảy ra lỗi. Vui lòng thử lại!');
          return of(err);
        }),
        retry(3)
      )
      .subscribe();
  }

  private updateForm() {
    this.formComplete.patchValue({ email: this.user.email });
  }
  private initForm() {
    this.formComplete = this.fb.group({
      email: ['', [Validators.email]],
      password: [''],
    });
  }
}
