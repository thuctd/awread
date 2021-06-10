import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { faComments, faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'wrt-molec-info-book',
  templateUrl: './info-book.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoBookMolec implements OnInit {
  @Input() title = 'Em là nhà!';
  @Input()
  description = `Tình yêu là chắp vá cùng nhau, người này thiếu cái này nhưng người kia sẽ bù lại theo quy luật bù trừ. Ở đời không ai hoàn hảo cả, cái hoàn hảo chính là vì nhau mà nhường nhịn, cố gắng bù đắp lại cho nhau...`;

  @Input() icons = [
    {
      fa: faEye,
      text: '136.5k',
    },
    {
      fa: faComments,
      text: '69k',
    },
  ];

  @Input() btns = [
    {
      title: 'Đọc',
      active: true,
    },
    {
      title: '+',
      active: true,
    },
  ];

  // eslint-disable-next-line max-len

  @Input() moreContent = 'Xem thêm';

  @Output() moreEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
