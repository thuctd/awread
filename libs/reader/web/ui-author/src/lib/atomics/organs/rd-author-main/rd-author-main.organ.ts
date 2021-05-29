import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-rd-author-main',
  templateUrl: './rd-author-main.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorMainOrgan implements OnInit {
  @Input() numberProduct;
  @Input() user;
  @Input() isFollow = true;
  @Input() isBlock = false;

  constructor() {}

  ngOnInit(): void {}
}
