import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'tab-btn',
  templateUrl: './tab-btn.atom.html',
  styleUrls: ['./tab-btn.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabBtnAtom implements OnInit {
  @Output() tabClicked = new EventEmitter();
  @Input() tabName = 'tab name';
  @Input() active = false;
  constructor() { }

  ngOnInit(): void {
  }

}
