import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-rd-author-list-btns-mb',
  templateUrl: './rd-author-list-btns-mb.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorListBtnsMbMolec implements OnInit {
  @Input() classBtn1 = 'py-1 w-full rounded text-sm';
  @Input() classBtn2 = 'py-1 w-5/12 rounded';

  constructor() {}

  ngOnInit(): void {}
}
