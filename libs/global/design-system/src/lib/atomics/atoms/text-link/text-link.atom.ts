import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'atom-text-link',
  templateUrl: './text-link.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextLinkAtom implements OnInit {
  @Output() submitEvent = new EventEmitter();
  @Input() text = 'textLink';
  @Input() href = '';
  @Input() class = 'text-green-400';

  constructor() {}

  ngOnInit(): void {}
}
