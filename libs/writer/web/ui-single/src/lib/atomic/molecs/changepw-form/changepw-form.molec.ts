import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'changepw-form',
  templateUrl: './changepw-form.molec.html',
  styleUrls: ['./changepw-form.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangepwFormMolec implements OnInit {
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
