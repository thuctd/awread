import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';
import { faChartLine, faShareAlt, faAngleDown, faPlusCircle, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'template-wrt-books-list',
  templateUrl: './wrt-books-list.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtBooksListTemplate implements OnInit {
  @Input() data = {
    btns: [
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
    ],
    actions: [

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
    ]
  };
  @Input() books = [];
  @Input() loading: boolean;
  @Output() bookEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void { }
}
