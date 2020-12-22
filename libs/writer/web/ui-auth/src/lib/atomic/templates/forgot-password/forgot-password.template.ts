import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'forgot-password',
  templateUrl: './forgot-password.template.html',
  styleUrls: ['./forgot-password.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotPasswordTemplate implements OnInit {
  isSentEmail = false;
  // @Output() submitEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  submitEvent(){}
  forgotSubmitEvent(){
    this.isSentEmail = true;
  }


}
