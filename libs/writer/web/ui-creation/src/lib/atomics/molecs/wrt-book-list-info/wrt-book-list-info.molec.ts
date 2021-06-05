import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faComments, faStar } from '@fortawesome/free-solid-svg-icons';
import { WrtDetailPopupBookTemplate } from '../../templates';

@Component({
  selector: 'molec-wrt-book-list-info',
  templateUrl: './wrt-book-list-info.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtBookListInfoMolec implements OnInit {
  @Input() book = {
    bookId: '',
    title: '',
    categoryId: '',
    viewCount: '',
    published: false,
    cover: false
  };
  @Input() href = [];
  @Input() faIcon = faStar;
  @Input() srcImg = '/global-assets/images/image.webp';
  @Input() faIcon2 = faComments;
  @Output() bookEvent = new EventEmitter();
  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void { }
}
