import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faComments, faStar } from '@fortawesome/free-solid-svg-icons';
import { WrtDetailPopupBookTemplate } from '../../templates';

@Component({
  selector: 'wrt-list-stories',
  templateUrl: './wrt-list-stories.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtListStoriesMolec implements OnInit {
  @Input() book = {
    title: '',
    categoryId: '',
    viewCount: ''
  };
  @Input() href = [];
  @Input() faIcon = faStar;
  @Input() srcImg = '/global-assets/images/image.webp';
  @Input() faIcon2 = faComments;
  @Output() openDetailBookEvent = new EventEmitter();
  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void { }

}
