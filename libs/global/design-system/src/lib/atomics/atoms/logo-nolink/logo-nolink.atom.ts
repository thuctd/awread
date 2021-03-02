import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-logo-nolink',
  templateUrl: './logo-nolink.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoNolinkAtom implements OnInit {
  @Input() link = '/global-assets/images/logo-white.webp';
  @Input() numberSize = '28';

  constructor() {}

  ngOnInit(): void {}
}
