import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'atom-icon-btn',
  templateUrl: './icon-btn.atom.html',
  styleUrls: ['./icon-btn.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconBtnAtom implements OnInit {
  @Input() icon;
  @Input() value;
  @Output() submitEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
