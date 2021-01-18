import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'list-detail-short-book',
  templateUrl: './list-detail-short-book.organ.html',
  styleUrls: ['./list-detail-short-book.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListDetailShortBookOrgan implements OnInit {
  @Input() size = 5;
  counter = Array

  constructor() { }

  ngOnInit(): void {
  }

}
