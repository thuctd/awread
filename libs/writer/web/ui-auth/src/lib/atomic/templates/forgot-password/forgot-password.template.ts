import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'forgot-password',
  templateUrl: './forgot-password.template.html',
  styleUrls: ['./forgot-password.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotPasswordTemplate implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
