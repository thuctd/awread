import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-rd-author-main-mb',
  templateUrl: './rd-author-main-mb.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorMainMbOrgan implements OnInit {
  @Input() excerpt = `Chào chúng cậu tớ là Cẩm Thương ...`;
  @Input() isFollow = true;
  @Input() isBlock = true;
  @Input() user;

  constructor() {}

  ngOnInit(): void {}
}
