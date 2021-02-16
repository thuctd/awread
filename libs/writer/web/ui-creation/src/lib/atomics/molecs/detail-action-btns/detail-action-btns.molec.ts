import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'detail-action-btns',
  templateUrl: './detail-action-btns.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailActionBtnsMolec implements OnInit {
  @Input() btns = [
    {
      submitText: 'Draft',
      isActive: false,
    },
    {
      submitText: 'Publish',
      isActive: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
