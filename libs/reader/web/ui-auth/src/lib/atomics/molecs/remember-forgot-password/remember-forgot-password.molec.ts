import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-remember-forgot-password',
  templateUrl: './remember-forgot-password.molec.html',
  styleUrls: ['./remember-forgot-password.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RememberForgotPasswordMolec implements OnInit {
  @Input() textLink = {
    text: 'Quên mật khẩu?',
    class: 'text-green-500 text-sm',
    link: '',
  };
  constructor() { }

  ngOnInit(): void { }
}
