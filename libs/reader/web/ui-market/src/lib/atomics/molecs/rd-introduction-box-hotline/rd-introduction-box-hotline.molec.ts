import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-rd-introduction-box-hotline',
  templateUrl: './rd-introduction-box-hotline.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .w-104 {
        width: 26rem;
      }
      :host .bg {
        background: rgba(255, 255, 255, 0.4);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdIntroductionBoxHotlineMolec implements OnInit {
  @Input() src = 'https://www.pngfind.com/pngs/m/289-2898947_png-file-icon-hotline-transparent-png.png';
  @Input() contents = [
    {
      title: 'Tên công ty:',
      content: 'Awread Web',
    },
    {
      title: 'Danh mục kinh doanh:',
      content: 'Giải trí',
    },
    {
      title: 'Quốc gia:',
      content: 'Việt Nam',
    },
    {
      title: 'Vị trí công ty:',
      content: 'Hà nội',
    },
    {
      title: 'Người dùng:',
      content: 'Việt Nam',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
