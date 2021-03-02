import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faComments, faStar } from '@fortawesome/free-solid-svg-icons';
import { DetailBookTemplate } from '../../templates';

@Component({
  selector: 'list-stories',
  templateUrl: './list-stories.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListStoriesMolec implements OnInit {
  @Input() book = {
    title: '',
    categoryname: '',
  };
  @Input() faIcon = faStar;
  @Input() srcImg = '/global-assets/images/image.webp';
  @Input() countComment = '40';
  @Input() countView = '696969k';
  @Input() faIcon2 = faComments;

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  openDetailBook(): void {
    this.matDialog.open(DetailBookTemplate, {
      width: '55rem',
      height: '33rem',
    });
  }
}
