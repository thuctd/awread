import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'atom-social-connect-btn',
  templateUrl: './social-connect-btn.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
      .bg-blue {
        background-color: #3b5998;
      }
      .bg-red {
        background-color: #db4e42;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialConnectBtnAtom implements OnInit {
  @Input() image = '/global-assets/images/facebook.webp';
  @Input() title = 'Kết nối bằng facebook';
  @Input() bg = '';
  @Output() ClickConnect = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
