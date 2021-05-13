import { Component, OnInit, ChangeDetectionStrategy, Input, SimpleChanges, OnChanges } from '@angular/core';

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
export class LogoNolinkAtom implements OnInit, OnChanges {
  @Input() mode: 'new' | undefined;
  @Input() link = '/global-assets/images/logo-white.webp';
  @Input() numberSize = '28';
  constructor() { }

  ngOnInit(): void { }

  //LEARN: ngOnChanges
  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
    switch (changes?.mode.currentValue) {
      case 'new':
        this.link = '/global-assets/images/newlogo.webp';
        break;
      default:
        this.link = '/global-assets/images/logo-white.webp';
        break;
    }
  }
}
