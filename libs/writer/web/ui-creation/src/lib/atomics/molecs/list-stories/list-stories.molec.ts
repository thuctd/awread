import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faComments, faStar } from '@fortawesome/free-solid-svg-icons';
import { DetailBookTemplate } from '../../templates';

@Component({
  selector: 'list-stories',
  templateUrl: './list-stories.molec.html',
  styleUrls: ['./list-stories.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListStoriesMolec implements OnInit {
  @Input() book;
  @Input() faIcon = faStar;
  @Input() srcImg = 'https://via.placeholder.com/260x370.png';
  @Input() countComment = '40';
  @Input() countView = '696969k';
  @Input() faIcon2 = faComments;

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}
  
  openDetailBook(): void {
    this.matDialog.open(DetailBookTemplate, {
      width: '55rem',
      height: '33rem'
    });
  }
}
