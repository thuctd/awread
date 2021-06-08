import { Router } from '@angular/router';
import { ChangeDetectorRef, Directive, Injectable, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ForgotPasswordFacade } from '@awread/core/users';
import { SnackbarService } from '@awread/global/packages';
@Injectable({
  providedIn: 'root',
})
@Directive()
export class ForgotPage implements OnInit {
  isSentEmail = false;
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private forgotPasswordFacade: ForgotPasswordFacade,
    private snackbarService: SnackbarService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}
  forgotSubmitEvent(email: string) {
    console.log('email: ', email);
    this.forgotPasswordFacade.send(email).subscribe((result: any) => {
      if (result.success == true) {
        this.isSentEmail = true;
        this.cd.detectChanges();
      } else {
        const message = result.message.includes('not found')
          ? 'Địa chỉ email này không có trong hệ thống'
          : result.message;
        this.snackbarService.showWarning(message);
      }
      console.log('result', result);
    });
    // this.forgotPasswordFacade.sendLinkResetPassword(email);
  }
  closeEvent() {
    console.log('send link reset password ok!');
    this.router.navigate(['/login']);
  }
}
