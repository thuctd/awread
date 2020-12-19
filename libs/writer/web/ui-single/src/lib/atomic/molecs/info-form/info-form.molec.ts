import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'info-form',
  templateUrl: './info-form.molec.html',
  styleUrls: ['./info-form.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoFormMolec implements OnInit {
  items = [
    {
      key: 'Email',
    },
    {
      key: 'Phone number',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
