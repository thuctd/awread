import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-rd-introduction-box-hotline',
  templateUrl: './rd-introduction-box-hotline.molec.html',
  styles: [
    `
      @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap');
      :host {
        display: block;
      }
      :host div {
        font-family: 'Nunito', sans-serif;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdIntroductionBoxHotlineMolec implements OnInit {
  @Input() srcImg = '/global-assets/images/Group-847.webp';
  @Input() contents = [
    {
      title: 'Trang web công ty:',
      content: 'Awread Web',
    },
    {
      title: 'Danh mục kinh doanh:',
      content: 'Giải trí',
    },
    {
      title: 'Vị trí công ty:',
      content: 'Hà nội',
    },
    {
      title: 'Đối tượng:',
      content: 'Việt Nam',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
