import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'auth-description',
  templateUrl: './auth-description.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthDescriptionAtom implements OnInit {
  @Input() description = 'Đây là phần mô tả của phần đăng nhập nha!';
  constructor() {}

  ngOnInit(): void {}
}
