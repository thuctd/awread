import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'template-rd-search-book-mb',
  templateUrl: './rd-search-book-mb.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdSearchBookMbTemplate implements OnInit {
  @Input() title = 'Cô gái năm ấy chúng ta theo đuổi';
  @Input() items = [
    {
      id: 1,
      name: 'Cô gái năm ấy chúng ta theo đuổi',
      category: 'Phiêu lưu, hành động',
    },
    {
      id: 2,
      name: 'Cô gái năm ấy chúng ta theo đuổi',
      category: 'Phiêu lưu',
    },
    {
      id: 3,
      name: 'Cô gái năm ấy chúng ta theo đuổi',
      category: 'Phiêu lưu',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
