import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'wrt-book-img',
  templateUrl: './wrt-book-img.atom.html',
  styleUrls: ['./wrt-book-img.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtBookImgAtom implements OnInit {
  @Input() srcImg = 'https://via.placeholder.com/520x740.png';
  @Input() chapterForm: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
