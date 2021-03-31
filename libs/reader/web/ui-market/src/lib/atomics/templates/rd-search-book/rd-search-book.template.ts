import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

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
  @Input() searchControl: FormControl = new FormControl('');
  @Input() items = [
    {
      title: 'Cô gái chúng ta cùng theo đuổi',
      imgUrl: 'Cô gái chúng ta cùng theo đuổi',
      category: 'Viễn tưởng',
      status: 'Hoàn thành',
    },
    {
      title: 'Em là nhà',
      imgUrl: 'Cô gái chúng ta cùng theo đuổi',
      category: 'Hành động',
      status: 'Hoàn thành',
    },
    {
      title: 'Em là hot girl trong bộ váy ngắn',
      imgUrl: 'Cô gái chúng ta cùng theo đuổi',
      category: 'Phiêu lưu, hài hước, hành động',
      status: 'Hoàn thành',
    },
    {
      title: 'muahahahahaha',
      imgUrl: 'Cô gái chúng ta cùng theo đuổi',
      category: 'Viễn tưởng',
      status: 'Hoàn thành',
    },
  ];

  constructor() { }

  ngOnInit(): void { }
}
