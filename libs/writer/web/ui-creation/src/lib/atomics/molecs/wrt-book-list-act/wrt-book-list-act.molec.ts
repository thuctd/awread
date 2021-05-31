import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { faChartLine, faShareAlt, faAngleDown, faPlusCircle, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'molec-wrt-book-list-act',
  templateUrl: './wrt-book-list-act.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtBookListActMolec implements OnInit {
  @Output() bookEvent = new EventEmitter();
  @Input() bookId: string;
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

  constructor() { }

  ngOnInit(): void { }

}
