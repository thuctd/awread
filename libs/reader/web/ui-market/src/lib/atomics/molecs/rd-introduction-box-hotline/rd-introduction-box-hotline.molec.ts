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
      isLink: '',
    },
    {
      title: 'Danh mục kinh doanh:',
      content: 'Giải trí',
      isLink: '',
    },
    {
      title: 'Quốc gia:',
      content: 'Việt Nam',
      isLink: '',
    },
    {
      title: 'Vị trí công ty:',
      content: 'Hà nội',
      isLink: '',
    },
    {
      title: 'Người dùng:',
      content: 'Việt Nam',
      isLink: '',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
