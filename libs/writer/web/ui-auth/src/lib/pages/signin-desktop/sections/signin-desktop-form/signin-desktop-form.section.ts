import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'awread-signin-desktop-form',
  templateUrl: './signin-desktop-form.section.html',
  styleUrls: ['./signin-desktop-form.section.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SigninDesktopFormSection implements OnInit {
  @Input() form;
  @Input() mode;
  @Input() template;
  @Input() hasValueUs;
  @Input() hasValuePw;
  @Input() activeTemplate;
  @Input() hasValueName: boolean;
  @Input() hasValueCfpw: boolean;
  @Output() auth: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onKeyUpName(item) {
    if (item.target.value.length === 0) {
      this.hasValueName = false
    } else {
      this.hasValueName = true
    }
  }

  onKeyUpUsername(item) {
    if (item.target.value.length === 0) {
      this.hasValueUs = false
    } else {
      this.hasValueUs = true
    }
  }

  onKeyUpPassWord(item) {
    if (item.target.value.length === 0) {
      this.hasValuePw = false
    } else {
      this.hasValuePw = true
    }
  }

  onKeyUpConfirmPassWord(item) {
    if (item.target.value.length === 0) {
      this.hasValueCfpw = false
    } else {
      this.hasValueCfpw = true
    }
  }
}
