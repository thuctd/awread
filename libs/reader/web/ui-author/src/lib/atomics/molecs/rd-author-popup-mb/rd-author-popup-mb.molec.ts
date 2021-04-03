import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'molec-rd-author-popup-mb',
  templateUrl: './rd-author-popup-mb.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorPopupMbMolec implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
