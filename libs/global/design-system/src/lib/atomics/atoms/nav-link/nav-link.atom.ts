import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-nav-link',
  templateUrl: './nav-link.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavLinkAtom implements OnInit {
  @Input() title = 'Trang chủ';
  @Input() href = '/home';
  @Input() color = 'text-white';
  constructor() {}

  ngOnInit(): void {}
}
