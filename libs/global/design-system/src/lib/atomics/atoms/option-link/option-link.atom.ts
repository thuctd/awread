import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'option-link',
  templateUrl: './option-link.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionLinkAtom implements OnInit {
  @Input() suggestText;
  @Input() link;
  @Input() title;
  @Output() btnClicked = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}
}
