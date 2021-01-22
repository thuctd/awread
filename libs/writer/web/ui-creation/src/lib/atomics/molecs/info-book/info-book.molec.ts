import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faComments, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'molec-info-book',
  templateUrl: './info-book.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoBookMolec implements OnInit {
  @Input() titleBook = {
    title: 'Em là nhà!',
    size: 'l'
  };
  @Input() icons = [{
    fa: faEye,
    text: '136.5k'
  },{
    fa: faComments,
    text: '69k'
  }];

  @Input() btns = [{
    title: 'Đọc',
    active: true
  },{
    title: '+',
    active: true
  }];

  // eslint-disable-next-line max-len
  @Input() contentBook = `Tình yêu là chắp vá cùng nhau, người này thiếu cái này nhưng người kia sẽ bù lại theo quy luật bù trừ. Ở đời không ai hoàn hảo cả, cái hoàn hảo chính là vì nhau mà nhường nhịn, cố gắng bù đắp lại cho nhau...`;

  @Input() moreContent = {
    text: 'Xem thêm',
    size: 'm',
    color: 'green'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
