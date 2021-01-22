import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'list-info-long-book',
  templateUrl: './list-info-long-book.molec.html',
  styleUrls: ['./list-info-long-book.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListInfoLongBookMolec implements OnInit {
  @Input() book = {
    title: 'Cô gái chúng ta cùng theo đuổi năm nào',
    size: 'm',
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
