import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-rd-head-menu-mb',
  templateUrl: './rd-head-menu-mb.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdHeadMenuMbMolec implements OnInit {
  @Input() isLogin = true;
  @Input() user = {
    name: '',
    firstname: '',
    userId: ''
  };
  @Input() vip = {
    srcImg: '/global-assets/images/Group-868.webp',
    key: 'Vip:',
    value: '0',
  };
  @Input() coin = {
    srcImg: '/global-assets/images/Group-869.webp',
    key: 'Coin:',
    value: '0',
  };

  constructor() { }

  ngOnInit(): void { }
}
