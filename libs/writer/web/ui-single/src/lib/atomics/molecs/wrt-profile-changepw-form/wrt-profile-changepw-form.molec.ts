import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wrt-profile-changepw-form',
  templateUrl: './wrt-profile-changepw-form.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtProfileChangepwFormMolec implements OnInit {
  items = [
    {
      key: 'New password',
    },
    {
      key: 'Current password',
    },
    {
      key: 'New password again',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
