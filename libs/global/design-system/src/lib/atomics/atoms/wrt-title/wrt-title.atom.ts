import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'wrt-title',
  templateUrl: './wrt-title.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .input__chapter {
        outline: 0;
        border-width: 0 0 2px;
        border-color: rgba(0, 0, 0, 0.2);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtTitleAtom implements OnInit {
  @Input() inputControl = new FormControl();
  constructor() {}

  ngOnInit(): void {}
}
