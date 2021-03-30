import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'atom-btn-icon',
  templateUrl: './btn-icon.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnIconAtom implements OnInit {
  @Input() icon = faThLarge;
  @Output() eventChangesDisplay = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
