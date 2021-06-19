import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-rd-dropdown-menu-item',
  templateUrl: './rd-dropdown-menu-item.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdDropdownMenuItemMolec implements OnInit {
  @Input() data = {
    title: {
      title: 'Truyện sưu tầm',
      page: '',
      categoryId: '',
    },
    page: ''
  };
  @Input() isLast = false;
  @Input() menu = [
    {
      page: 'introduction',
      title: 'Về chúng tôi',
    },
    {
      page: 'community',
      title: 'Tham gia với chúng tôi',
    },
    {
      page: 'news',
      title: 'Tin tức',
    },
  ];
  constructor() { }
  ngOnInit(): void { }
}
