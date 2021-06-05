import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { faChartLine, faShareAlt, faAngleDown, faPlusCircle, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'template-wrt-book-detail-tab',
  templateUrl: './wrt-book-detail-tab.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtBookDetailTabTemplate implements OnInit {
  @Input() categories;
  @Input() genres;
  @Input() book;
  @Input() chapters;

  @Input() tabsHead = [];

  @Output() detailBookEvent = new EventEmitter();

  @Input() bookForm: FormGroup = this.fb.group({
    img: ['/global-assets/images/image.webp'],
    title: ['', Validators.required],
    description: ['', Validators.required],
    completed: ['', Validators.required],
    genreIds: ['', Validators.required],
    audience: [null, Validators.required],
    categoryid: [null, Validators.required],
    srcImg: ['/global-assets/images/image.webp'],
  });

  @Input() btns = [
    {
      titleButton: 'Thống kê',
      faIcon: faChartLine,
      type: 'static',
    },
    {
      titleButton: 'Chia sẻ',
      faIcon: faShareAlt,
      type: 'share',
    },
  ];

  @Input() actions = [

    {
      name: 'Thêm chương',
      type: 'create-chapter',
      icon: faPlusCircle,
    },
    {
      name: 'Chỉnh sửa',
      type: 'edit',
      icon: faPlusSquare,
    },
    {
      name: 'Xóa',
      type: 'delete',
      icon: faTrash,
    },
  ];


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }

}
