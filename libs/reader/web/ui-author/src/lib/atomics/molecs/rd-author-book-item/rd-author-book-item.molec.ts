import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-rd-author-book-item',
  templateUrl: './rd-author-book-item.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorBookItemMolec implements OnInit {
  @Input() category = 'Hành động, phiêu lưu';
  @Input() book;
  @Input() isText = true;
  @Input() isSize = true;

  @Input() displayUI = {
    ui: {
      isAuthor: true,
      isRating: true,
      isIcon: true,
      isDate: true,
    },
    size: {
      sizeTitle: 's',
      sizeBtn: false,
    },
  };

  constructor() { }

  ngOnInit(): void { }
}
