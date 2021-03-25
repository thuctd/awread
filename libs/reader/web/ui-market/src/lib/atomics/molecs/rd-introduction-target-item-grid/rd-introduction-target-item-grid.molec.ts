import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-rd-introduction-target-item-grid',
  templateUrl: './rd-introduction-target-item-grid.molec.html',
  styles: [
    `
      @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@700&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap');
      :host {
        display: block;
      }
      :host .color-blue {
        color: #56569c;
      }
      :host .barlow-semi-condensed {
        font-family: 'Barlow Semi Condensed', sans-serif;
      }
      :host .border-bl {
        border: 2px solid #56569c;
      }
      :host .font-nunito-bold {
        font-family: 'Nunito', sans-serif;
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
    spacing: true,
  };

  constructor() {}

  ngOnInit(): void {}
}
