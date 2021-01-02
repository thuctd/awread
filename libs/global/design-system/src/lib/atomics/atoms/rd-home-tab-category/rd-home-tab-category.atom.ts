import { Component, OnInit, ChangeDetectionStrategy, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'atom-rd-home-tab-category',
  templateUrl: './rd-home-tab-category.atom.html',
  styleUrls: ['./rd-home-tab-category.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RdHomeTabCategoryAtom implements OnInit {
  @Output() tabClicked = new EventEmitter();
  @Input() tabName = 'tab name';
  @Input() active = false;

  constructor() { }

  ngOnInit(): void {
  }

}
