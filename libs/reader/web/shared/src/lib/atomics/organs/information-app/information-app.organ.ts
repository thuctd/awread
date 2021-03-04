import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-information-app',
  templateUrl: './information-app.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationAppOrgan implements OnInit {
  @Input() facebook = {
    title: 'Facebook',
    line1: 'facebook.com/awreadbook',
    line2: 'facebook.com/groups/awread',
    link1: '',
    link2: '',
  };

  @Input() address = {
    title: 'Địa chỉ',
    line1: 'Số 00, Đường 00, 000',
    line2: 'Tel: 0326988916',
  };

  constructor() {}

  ngOnInit(): void {}
}
