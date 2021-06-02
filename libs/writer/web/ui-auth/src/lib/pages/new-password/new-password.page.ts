import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef, Directive, Injectable, OnInit } from '@angular/core';
import { ForgotPasswordFacade } from '@awread/core/users';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class NewPasswordPage implements OnInit {
  fail = null;
  token;
  userId;
  constructor(
    private route: ActivatedRoute,
    private forgotPasswordFacade: ForgotPasswordFacade,
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.token = this.route.snapshot.params['token'];
    this.userId = this.route.snapshot.params['userId'];
    console.log('token', this.token, this.userId);
    if (!this.token || !this.userId) {
      this.fail = 'missing';
      return;
    }
    this.checkTokenValid(this.token, this.userId);
  }

  checkTokenValid(token, userId) {
    this.forgotPasswordFacade.check(token, userId).subscribe(result => {
      console.log('result', result);
      if (result['message'].includes('expired') && result['success'] == false) {
        this.fail = 'expired';
      } else if (result['success'] == false) {
        this.fail = 'missing';
      } else {
        this.fail = null;
      }
      this.cd.detectChanges();
    });
  }

  updateNewPassword(password: string) {
    this.forgotPasswordFacade.updateNewPassword(this.token, this.userId, password).subscribe(result => {
      console.log('result', result);
      if (result['message'].includes('expired') && result['success'] == false) {
        this.fail = 'expired';
      } else if (result['success'] == false) {
        this.fail = 'missing';
      } else {
        this.fail = 'success';
      }
      this.cd.detectChanges();
    });

  }
}
