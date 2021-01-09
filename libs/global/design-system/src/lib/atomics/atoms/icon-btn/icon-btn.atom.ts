import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'atom-icon-btn',
  templateUrl: './icon-btn.atom.html',
  styleUrls: ['./icon-btn.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconBtnAtom implements OnInit {
  @Input() icon = faThumbsUp;
  @Input() value = '999';
  @Output() submitEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
