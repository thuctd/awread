import { Router } from '@angular/router';
import { Directive, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class ForgotPage implements OnInit {
  constructor(
    // private forgotPasswordFacade: ForgotPasswordFacade,
    private router: Router
  ) { }

  ngOnInit(): void { }
  forgotSubmitEvent(email: string) {
    // console.log('email: ', email);
    window.localStorage.setItem('email_reset_password', email);
    // this.forgotPasswordFacade.sendLinkResetPassword(email);
  }
  closeEvent() {
    // console.log('send link reset password ok!');
    this.router.navigate(['login']);
  }
}
