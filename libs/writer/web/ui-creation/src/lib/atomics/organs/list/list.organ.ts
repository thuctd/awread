import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.organ.html',
  styleUrls: ['./list.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListOrgan implements OnInit {
  @Output() moreEvent = new EventEmitter();
  @Input() btn = {
    submitText: 'Đăng truyện',
    isActive: true,
  };

  demoNumber = 10;

  counter = Array;

  constructor() { }

  ngOnInit(): void {
  }

  numberReturn(length) {
    return new Array(length);
  }

}
