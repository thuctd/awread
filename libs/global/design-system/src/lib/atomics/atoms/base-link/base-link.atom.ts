import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'base-link',
  templateUrl: './base-link.atom.html',
  styleUrls: ['./base-link.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseLinkAtom implements OnInit {
  @Output() onBtnClicked = new EventEmitter();
  @Input() linkTitle = "Xêm thêm...";
  @Input() isSize = true;

  constructor() { }

  ngOnInit(): void {
  }

}
