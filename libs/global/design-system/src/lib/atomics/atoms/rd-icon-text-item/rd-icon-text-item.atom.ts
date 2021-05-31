import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-rd-icon-text-item',
  templateUrl: './rd-icon-text-item.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdIconTextItemAtom implements OnInit {
  @Input() srcImg = '/global-assets/images/Group-868.webp';
  @Input() key = 'Vip:';
  @Input() value = '0';
  @Input() class = '';

  constructor() {}

  ngOnInit(): void {}
}
