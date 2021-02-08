import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'template-home-mobile',
  templateUrl: './home-mobile.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeMobileTemplate implements OnInit {
  @Input() imageSize = {
    width: '100%',
    height: '200px',
    space: 1,
  };

  constructor() {}

  ngOnInit(): void {}
}
