import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'template-login-web',
  templateUrl: './login-web.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginWebTemplate implements OnInit {
  @Input() link = '/global-assets/images/newlogo.webp';
  @Input() authForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  @Output() auth = new EventEmitter();

  constructor(
    private fb: FormBuilder, @Optional() public dialogRef: MatDialogRef<LoginWebTemplate>,
    private authService: SocialAuthService,
    private http: HttpClient
  ) { }

  ngOnInit(): void { }

  authClicked(event) {
    console.log('event', event);
    this.auth.emit(event);
    // this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    const ob = this.http.get('https://localhost:5000/auth/facebook')
      .pipe(tap(result => console.log('result')));
    console.log('ob', ob);
    ob.subscribe(result => console.log(result))
  }
}
