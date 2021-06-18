import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { WrtDetailPopupBookTemplate } from '@awread/writer/web/ui-creation';
import {
  faChartLine,
  faShareAlt,
  faAngleDown,
  faPlusCircle,
  faPlusSquare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

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
  @Input() isFilter = false;
  @Input() filters: FormGroup = this.fb.group({
    categoryId: [''],
    completed: [''],
  });

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
    ],
  };

  @Output() filterBooksEvent = new EventEmitter();

  constructor(private matDialog: MatDialog, private fb: FormBuilder) { }

  ngOnInit(): void { }

  displayFilter() {
    this.isFilter = !this.isFilter;
  }
}
