import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'molec-profile-change-password-form',
  templateUrl: './profile-change-password-form.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileChangePasswordFormMolec implements OnInit {
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
