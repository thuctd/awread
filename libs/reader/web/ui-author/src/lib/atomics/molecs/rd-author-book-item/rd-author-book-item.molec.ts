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
  @Input() items = [
    {
      id: '',
      name: '',
    },
  ];
  @Input() book;

  @Input() displayUIMobile = {
    ui: {
      isAuthor: true,
      isRating: true,
      isStatus: true,
      isIcon: true,
      isDate: true,
    },
    size: {
      sizeTitle: 's',
      sizeBtn: false,
    },
  };

  @Input() displayUIDesktop = {
    ui: {
      isAuthor: true,
      isRating: true,
      isStatus: false,
      isIcon: true,
      isDate: true,
    },
    size: {
      sizeTitle: 'm',
      sizeBtn: true,
    },
  };

  constructor() {}
  ngOnInit(): void {}
}
