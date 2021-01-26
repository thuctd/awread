import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'organ-detail-book-chapter',
  templateUrl: './detail-book-chapter.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailBookChapterOrgan implements OnInit {
  icon = faAngleDown;
  @Output() submitEvent = new EventEmitter()
  chapters = [
    {
      title : 'Mở đầu',
      value: '',
      price: 'Miễn phí',
      createAt: '09-09-2020'
    },
    {
      title : 'Chương 1',
      value: 'Ngày ấy vì ai mà đổi thay',
      price: 'Miễn phí',
      createAt: '09-09-2020'
    },
    {
      title : 'Chương 1',
      value: 'Ngày ấy vì ai mà đổi thay',
      price: 'Miễn phí',
      createAt: '09-09-2020'
    },
    {
      title : 'Chương 1',
      value: 'Ngày ấy vì ai mà đổi thay',
      price: 'Miễn phí',
      createAt: '09-09-2020'
    },
    {
      title : 'Chương 1',
      value: 'Ngày ấy vì ai mà đổi thay',
      price: 'Miễn phí',
      createAt: '09-09-2020'
    },
    {
      title : 'Chương 1',
      value: 'Ngày ấy vì ai mà đổi thay',
      price: '100 coins',
      createAt: '09-09-2020'
    },
    {
      title : 'Chương 1',
      value: 'Ngày ấy vì ai mà đổi thay',
      price: '100 coins',
      createAt: '09-09-2020'
    },
    {
      title : 'Chương 1',
      value: 'Ngày ấy vì ai mà đổi thay',
      price: '100 coins',
      createAt: '09-09-2020'
    },
    {
      title : 'Chương 1',
      value: 'Ngày ấy vì ai mà đổi thay',
      price: '100 coins',
      createAt: '09-09-2020'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
