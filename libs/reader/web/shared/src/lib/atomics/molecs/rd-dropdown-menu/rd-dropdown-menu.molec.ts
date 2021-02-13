import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-rd-dropdown-menu',
  templateUrl: './rd-dropdown-menu.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdDropdownMenuMolec implements OnInit {
  @Input() hidden = true;
  @Input() dropdownData = [
    {
      title: 'Truyện tự sáng tác',
      menu: [
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
      ],
    },
    {
      title: 'Truyện sưu tầm',
      menu: [
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
      ],
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
