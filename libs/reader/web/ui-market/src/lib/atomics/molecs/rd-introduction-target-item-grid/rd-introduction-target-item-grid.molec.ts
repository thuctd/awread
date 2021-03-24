import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-rd-introduction-target-item-grid',
  templateUrl: './rd-introduction-target-item-grid.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .color-blue {
        color: #56569c;
      }
      :host .border-bl {
        border: 2px solid #56569c;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdIntroductionTargetItemGridMolec implements OnInit {
  @Input() items = {
    srcImg: '/global-assets/images/Group-843.webp',
    title: 'Thành viên',
    number: '100.000 +',
    text: 'Cộng đồng lớn mạnh',
  };

  constructor() {}

  ngOnInit(): void {}
}
