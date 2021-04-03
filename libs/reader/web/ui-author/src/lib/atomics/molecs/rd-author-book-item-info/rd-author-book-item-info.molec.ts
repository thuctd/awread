import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'molec-rd-author-info-book-item',
  templateUrl: './rd-author-book-item-info.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorBookItemInfoMolec implements OnInit {
  @Input() status = 'Đang ra';
  @Input() countView = '1M';
  @Input() faIcon = faEye;
  @Input() book = 'Cô gái chúng ta cùng theo đuổi năm nào';
  @Input() isText = true;
  @Input() isSize = true;

  @Input() btns = ['Chương 1', 'Chương 2'];
  @Output() submitEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
