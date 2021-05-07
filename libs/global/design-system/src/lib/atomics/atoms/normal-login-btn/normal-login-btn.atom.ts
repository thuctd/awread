import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'normal-login-btn',
  templateUrl: './normal-login-btn.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NormalLoginBtn implements OnInit {
  @Output() btnClicked = new EventEmitter();
  @Input() name = 'Đăng nhập';
  @Input() active = false;
  constructor() {}

  ngOnInit(): void {}
}
