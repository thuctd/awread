import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'detail-link-btns',
  templateUrl: './detail-link-btns.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailLinkBtnsMolec implements OnInit {
  @Input() formActiveStatus = false;
  constructor() {}

  ngOnInit(): void {}
}
