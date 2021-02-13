import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-title',
  templateUrl: './title.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleAtom implements OnInit {
  @Input() title = 'Title';
  @Input() isUppercase: true | false = true;

  constructor() {}

  ngOnInit(): void {}
}
