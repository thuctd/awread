import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-rd-setting',
  templateUrl: './rd-setting.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdSettingOrgan implements OnInit {
  @Input() bgs = ['Mặc định', 'Sáng', 'Tối'];
  @Input() sizes = ['To', 'Vừa', 'Nhỏ'];

  constructor() {}

  ngOnInit(): void {}
}
