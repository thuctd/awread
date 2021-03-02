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
  @Input() data = { title: 'Truyện sưu tầm', href: '' };
  @Input() isLast = false;
  @Input() menu = [
    {
      href: '/',
      title: 'Truyện dài',
    },
    {
      href: '/',
      title: 'Truyện ngắn',
    },
    {
      href: '/',
      title: 'Tản văn',
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
