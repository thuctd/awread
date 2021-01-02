import { Component, OnInit, ChangeDetectionStrategy, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'atom-base-btn',
  templateUrl: './base-btn.atom.html',
  styleUrls: ['./base-btn.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseBtnAtom implements OnInit {
  @Output() onBtnClicked = new EventEmitter();
  @Input() chapter = 'Chương 1';
  @Input() isSize = true;

  constructor() { }

  ngOnInit(): void {
  }

}
