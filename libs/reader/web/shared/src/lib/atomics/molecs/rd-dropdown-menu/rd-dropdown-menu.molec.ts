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
          page: 'composed',
          type: 'lb',
          title: 'Truyện dài',
        },
        {
          page: 'composed',
          type: 'lb',
          title: 'Truyện ngắn',
        },
        {
          page: 'composed',
          type: 'lb',
          title: 'Tản văn',
        },
      ],
    },
    {
      title: 'Truyện sưu tầm',
      menu: [
        {
          page: 'collected',
          type: 'lb',
          title: 'Truyện dài',
        },
        {
          page: 'collected',
          type: 'lb',
          title: 'Truyện ngắn',
        },
        {
          page: 'collected',
          type: 'lb',
          title: 'Tản văn',
        },
      ],
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
