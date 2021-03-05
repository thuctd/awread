import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
