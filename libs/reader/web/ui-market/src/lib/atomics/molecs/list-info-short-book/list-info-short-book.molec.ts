import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'list-info-short-book',
  templateUrl: './list-info-short-book.molec.html',
  styleUrls: ['./list-info-short-book.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListInfoShortBookMolec implements OnInit {
  @Input() book = {
    title: 'Cô gái chúng ta cùng theo đuổi năm nào',
    isSize: true,
  };

  @Input() btns = [
    {
      chapter: 'Chương 1',
      isSize: true,
    }, {
      chapter: 'Chương 2',
      isSize: true,
    }];
  @Output() submitEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
