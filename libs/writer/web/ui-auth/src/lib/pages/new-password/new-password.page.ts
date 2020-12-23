import { ForgotPasswordFacade } from './../../../../../feature-auth/src/lib/facades/forgot-password.facade';
import { AuthFacade } from 'libs/writer/web/feature-auth/src/lib/facades/auth.facade';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { Directive, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class NewPasswordPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private afAuth: AngularFireAuth,
    private forgotPasswordFacade: ForgotPasswordFacade
  ) {}

  ngOnInit(): void {}

  updateNewPassword(password: string) {
    // console.log('password', password);
    // console.log('params: ', this.route.snapshot.queryParams);
    const code = this.route.snapshot.queryParams['oobCode'];
    this.forgotPasswordFacade.confirmPasswordReset(code, password);
  }
}
