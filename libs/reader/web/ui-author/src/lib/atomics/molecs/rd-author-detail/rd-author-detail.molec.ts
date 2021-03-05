import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-rd-author-detail',
  templateUrl: './rd-author-detail.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorDetailMolec implements OnInit {
  @Input() numberProduct = '5';
  @Input() numberFollow = '10';
  @Input() excerpt = `Chào chúng cậu tớ là Cẩm Thương ...`;

  constructor() {}

  ngOnInit(): void {}
}
