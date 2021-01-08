import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'tab-book',
  templateUrl: './tab-book.molec.html',
  styleUrls: ['./tab-book.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabBookMolec implements OnInit {

  @Input() tabBooks = [{
    title: 'Cô gái chúng ta cùng theo đuổi năm nào',
    srcImg: 'https://via.placeholder.com/260x370.png',
    isActive: true,
  }, {
    title: 'Yêu em từ cái nhìn đầu tiên',
    srcImg: 'https://via.placeholder.com/260x370.png',
    isActive: false,
  }, {
    title: 'Tháng 4 là lời nói dối của em',
    srcImg: 'https://via.placeholder.com/260x370.png',
    isActive: false,
  }, {
    title: 'Em là nhà!!!',
    srcImg: 'https://via.placeholder.com/260x370.png',
    isActive: false,
  }, {
    title: 'Cô gái chúng ta cùng theo đuổi năm nào',
    srcImg: 'https://via.placeholder.com/260x370.png',
    isActive: true,
  }, {
    title: 'Yêu em từ cái nhìn đầu tiên',
    srcImg: 'https://via.placeholder.com/260x370.png',
    isActive: false,
  }, {
    title: 'Tháng 4 là lời nói dối của em',
    srcImg: 'https://via.placeholder.com/260x370.png',
    isActive: false,
  }, {
    title: 'Em là nhà!!!',
    srcImg: 'https://via.placeholder.com/260x370.png',
    isActive: false,
  }];

  constructor() { }

  ngOnInit(): void { }

}
