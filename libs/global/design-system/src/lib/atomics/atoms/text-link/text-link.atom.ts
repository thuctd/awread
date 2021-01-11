import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'atom-text-link',
  templateUrl: './text-link.atom.html',
  styleUrls: ['./text-link.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextLinkAtom implements OnInit {
  @Output() BtnClicked = new EventEmitter();
  @Input() text = 'textLink';
  @Input() colorTextLink = '';
  @Input() colorTextLinkHover = '';
  @Input() numberColorTextLink = '';
  @Input() numberColorTextLinkHover = '';
  @Input() styleTextLink = '';
  @Input() sizeTextLink = '';
  @Input() sizeTextLinkSm = '';
  @Input() sizeTextLinkMd = '';
  @Input() sizeTextLinkLg = '';
  @Input() sizeTextLinkXl = '';
  @Input() href = '';

  constructor() {}

  ngOnInit(): void {}
}
