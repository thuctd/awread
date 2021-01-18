import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'list-info-prose',
  templateUrl: './list-info-prose.molec.html',
  styleUrls: ['./list-info-prose.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListInfoProseMolec implements OnInit {
  @Input() book = {
    title: 'Cô gái chúng ta cùng theo đuổi năm nào',
    isSize: true,
  };

  @Input() moreContent = {
    text: 'Đọc thêm',
    size: 's',
    color: 'green'
  }

  @Output() moreEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
