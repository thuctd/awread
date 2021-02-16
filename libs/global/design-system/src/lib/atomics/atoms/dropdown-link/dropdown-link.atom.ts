import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-dropdown-link',
  templateUrl: './dropdown-link.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownLinkAtom implements OnInit {
  @Input() title = 'title';
  @Input() href = '';
  constructor() {}

  ngOnInit(): void {}
}
