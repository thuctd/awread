import { Component, OnInit, ChangeDetectionStrategy, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'atom-rd-list-tab-page',
  templateUrl: './rd-list-tab-page.atom.html',
  styleUrls: ['./rd-list-tab-page.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RdListTabPageAtom implements OnInit {
  @Output() tabClicked = new EventEmitter();
  @Input() tabName = 'tab name';
  @Input() active = false;

  constructor() { }

  ngOnInit(): void {
  }

}
