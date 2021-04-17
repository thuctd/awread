import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'molec-mb-info-book',
  templateUrl: './mb-info-book.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MbInfoBookMolec implements OnInit {
  @Input() book = {
    title: 'Cô gái chúng ta cùng theo đuổi năm nào',
    id: '1',
  };
  @Input() countComment = '40';
  @Input() faIcon = faEye;

  @Input() btns = ['Chương 1', 'Chương 2'];
  @Output() submitEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
