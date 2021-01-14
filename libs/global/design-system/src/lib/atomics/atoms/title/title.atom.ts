import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'atom-title',
  templateUrl: './title.atom.html',
  styleUrls: ['./title.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleAtom implements OnInit {
  @Input() title = 'Title';
  @Input() class = '';

  constructor() {}

  ngOnInit(): void {}
}
