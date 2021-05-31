import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'atom-btn-rectangle',
  templateUrl: './btn-rectangle.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnRectangleAtom implements OnInit {
  @Input() text = 'Nhắn tin';
  @Input() class = 'px-5 py-2 rounded-lg';
  @Output() btnClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }
}
