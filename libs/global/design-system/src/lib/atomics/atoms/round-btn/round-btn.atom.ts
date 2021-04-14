import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'atom-round-btn',
  templateUrl: './round-btn.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoundBtnAtom implements OnInit {
  @Input() title = 'Đọc chương đầu';
  @Input() color = 'bg-green-primary text-white';
  @Input() href = '/';
  @Input() bookId = '2zxcqwe213_azre';
  @Input() chapterId = '21345xzcasd32_2sa';
  @Output() submitEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
