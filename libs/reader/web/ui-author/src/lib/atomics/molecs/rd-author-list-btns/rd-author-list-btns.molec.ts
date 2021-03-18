import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-rd-author-list-btns',
  templateUrl: './rd-author-list-btns.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorListBtnsMolec implements OnInit {
  @Input() class = 'px-5 py-2 rounded-lg';

  constructor() {}

  ngOnInit(): void {}
}
