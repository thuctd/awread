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
  @Input() Title = 'Title';
  @Input() colorText = '';
  @Input() numberColorText = '';
  @Input() styleText = '';
  @Input() sizeText = '';
  @Input() sizeTextSm = '';
  @Input() sizeTextMd = '';
  @Input() sizeTextLg = '';
  @Input() sizeTextXl = '';

  constructor() {}

  ngOnInit(): void {}
}
