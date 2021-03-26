import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faAngleRight, faHome } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'template-rd-author',
  templateUrl: './rd-author.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorTemplate implements OnInit {
  @Input() follow = true;
  @Input() isBlock = false;
  @Input() storys = [
    {
      srcImg: '/global-assets/images/sach-co-gai-nam-ay-chung-ta-cung-theo-duoi.webp',
      altImg: '',
    },
    {
      srcImg: '/global-assets/images/sach-co-gai-nam-ay-chung-ta-cung-theo-duoi.webp',
      altImg: '',
    },
    {
      srcImg: '/global-assets/images/sach-co-gai-nam-ay-chung-ta-cung-theo-duoi.webp',
      altImg: '',
    },
    {
      srcImg: '/global-assets/images/sach-co-gai-nam-ay-chung-ta-cung-theo-duoi.webp',
      altImg: '',
    },
    {
      srcImg: '/global-assets/images/sach-co-gai-nam-ay-chung-ta-cung-theo-duoi.webp',
      altImg: '',
    },
    {
      srcImg: '/global-assets/images/sach-co-gai-nam-ay-chung-ta-cung-theo-duoi.webp',
      altImg: '',
    },
  ];

  menu = [
    {
      title: 'Home',
      link: '/home',
      size: 'text-md',
      icon: faHome,
    },
    {
      title: 'Tác giả',
      link: '',
      icon: faAngleRight,
      size: 'text-xs',
    },
    {
      title: 'Cẩm Thương',
      link: '',
      size: 'text-xs',
      icon: faAngleRight,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
