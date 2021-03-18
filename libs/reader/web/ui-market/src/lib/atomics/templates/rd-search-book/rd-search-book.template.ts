import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'template-rd-search-book',
  templateUrl: './rd-search-book.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdSearchBookTemplate implements OnInit {
  @Input() items = [
    {
      id: 1,
      name: 'Cô gái chúng ta cùng theo đuổi',
      category: 'Viễn tưởng',
      status: 'Hoàn thành',
    },
    {
      id: 2,
      name: 'Em là nhà',
      category: 'Hành động',
      status: 'Hoàn thành',
    },
    {
      id: 3,
      name: 'Em là hot girl trong bộ váy ngắn',
      category: 'Phiêu lưu, hài hước, hành động',
      status: 'Hoàn thành',
    },
    {
      id: 4,
      name: 'muahahahahaha',
      category: 'Viễn tưởng',
      status: 'Hoàn thành',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
