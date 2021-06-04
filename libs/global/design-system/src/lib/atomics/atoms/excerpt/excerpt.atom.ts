import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'excerpt',
  templateUrl: './excerpt.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExcerptAtom implements OnInit {
  // eslint-disable-next-line max-len
  @Input()
  excerpt = `Tuổi thanh xuân giống như một cơn mưa rào.`;

  @Input() class = 'text-gray-text text-xs';

  constructor() {}

  ngOnInit(): void {}
}
