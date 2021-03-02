import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'atom-icon-text',
  templateUrl: './icon-text.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTextAtom implements OnInit {
  @Input() icon = faEye;
  @Input() title = '124k';
  @Input() isSize = 2;
  constructor() {}

  ngOnInit(): void {}
}
