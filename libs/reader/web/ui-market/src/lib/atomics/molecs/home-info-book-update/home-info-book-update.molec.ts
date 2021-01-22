import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'molec-home-info-book-update',
  templateUrl: './home-info-book-update.molec.html',
  styleUrls: ['./home-info-book-update.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeInfoBookUpdateMolec implements OnInit {
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
