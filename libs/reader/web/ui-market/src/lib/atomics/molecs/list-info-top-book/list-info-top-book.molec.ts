import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'molec-list-info-top-book',
  templateUrl: './list-info-top-book.molec.html',
  styleUrls: ['./list-info-top-book.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListInfoTopBookMolec implements OnInit {
  @Input() book = {
    title: 'Cô gái chúng ta cùng theo đuổi năm nào',
    isSize: false,
  };

  @Input() btns = [
    {
      chapter: 'Chương 1',
      isSize: false,
    }, {
      chapter: 'Chương 2',
      isSize: false,
    }];
  @Output() submitEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
