import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'social-login-btn-fb',
  templateUrl: './social-login-btn-fb.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .color-blue {
        background-color: #3b5998;
        border-color: #3b5998;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialLoginBtnFbAtom implements OnInit {
  @Input() startText = 'Đăng nhập bằng ';
  @Input() name = 'Facebook';
  @Output() socialFbBtnClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }
}
