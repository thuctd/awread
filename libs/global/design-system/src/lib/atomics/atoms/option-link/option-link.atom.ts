import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

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
  constructor() {}
  @Input() suggestText;
  @Input() link;
  @Input() title;
  ngOnInit(): void {}
}
