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
  excerpt = `Tuổi thanh xuân giống như một cơn mưa rào. Dù cho bạn từng bị cảm lạnh vì tắm mưa, bạn vẫn muốn được đắm mình trong cơn mưa ấy lần nữa. Mỗi người đều từng có khoảng thời gian bồng bột ấy…`;

  @Input() class = 'text-gray-text text-xs';

  constructor() {}

  ngOnInit(): void {}
}
