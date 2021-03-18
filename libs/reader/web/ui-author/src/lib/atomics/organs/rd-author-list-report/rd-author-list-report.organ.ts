import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-rd-author-list-report',
  templateUrl: './rd-author-list-report.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorListReportOrgan implements OnInit {
  @Input() items = ['Nội dung bạo lực', 'Nội dung phản cảm', 'Tiết lộ thông tin cá nhân', 'Không thích', 'Spam'];

  constructor() {}

  ngOnInit(): void {}
}
