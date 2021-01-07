import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'list-stories',
  templateUrl: './list-stories.molec.html',
  styleUrls: ['./list-stories.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListStoriesMolec implements OnInit {
  @Input() book;
  @Input() faIcon = faStar;
  @Input() countView = '696969k';
  @Input() countPositive = 35;
  @Input() countNegative = 69;

  constructor() {}

  ngOnInit(): void {}
}
