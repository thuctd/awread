import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WrtDetailPopupBookTemplate } from '@awread/writer/web/ui-creation';
import { faChartLine, faShareAlt, faAngleDown, faPlusCircle, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'organ-wrt-books-list',
  templateUrl: './wrt-books-list.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .loading {
        height: calc(100vh - 20rem);
      }
      :host .no-data {
        height: calc(100vh - 20rem);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtBooksListOrgan implements OnInit {
  @Input() books = [];
  @Input() loading: boolean;
  @Output() bookEvent = new EventEmitter();
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

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void { }

}
