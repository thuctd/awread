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
          type: '',
          title: 'Truyện dài',
        },
        {
          page: 'composed',
          type: '',
          title: 'Truyện ngắn',
        },
        {
          page: 'composed',
          type: '',
          title: 'Tản văn',
        },
      ],
    },
    {
      title: 'Truyện sưu tầm',
      menu: [
        {
          page: 'collected',
          type: '',
          title: 'Truyện dài',
        },
        {
          page: 'collected',
          type: '',
          title: 'Truyện ngắn',
        },
        {
          page: 'collected',
          type: '',
          title: 'Tản văn',
        },
      ],
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
