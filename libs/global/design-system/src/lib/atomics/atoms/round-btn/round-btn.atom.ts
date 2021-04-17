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
  @Output() submitEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }
}
