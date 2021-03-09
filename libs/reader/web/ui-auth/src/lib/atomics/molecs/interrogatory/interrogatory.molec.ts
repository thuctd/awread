import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-interrogatory',
  templateUrl: './interrogatory.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InterrogatoryMolec implements OnInit {
  @Input() text = 'Nếu bạn chưa có tài khoản?';

  @Input() textLink = 'Tạo tài khoản mới';
  @Input() link = '';

  constructor() {}

  ngOnInit(): void {}
}
