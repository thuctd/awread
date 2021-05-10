import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'social-login-btn',
  templateUrl: './social-login-btn.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .color-blue {
        background-color: #3b5998;
        border-color: #3b5998;
      }
      :host .color-red {
        background-color: #dc4e41;
        border-color: #dc4e41;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialLoginBtnAtom implements OnInit {
  @Input() isColor = true;
  @Input() startText = 'Đăng nhập bằng ';
  @Input() name = 'Facebook';
  @Output() socialBtnClicked = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
