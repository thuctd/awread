import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-detail-book-info',
  templateUrl: './detail-book-info.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailBookInfoMolec implements OnInit {
  @Input() book = {
    auth: 'Cẩm Thương',
    type: 'Hoang tưởng, kinh dị',
    status: 'Đang tiến hành',
    publishedAt: '2020',
    country: '(chủ yếu dành cho truyện sưu tầm)'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
