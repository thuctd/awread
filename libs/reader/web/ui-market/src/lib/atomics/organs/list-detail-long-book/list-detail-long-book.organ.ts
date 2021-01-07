import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'list-detail-long-book',
  templateUrl: './list-detail-long-book.organ.html',
  styleUrls: ['./list-detail-long-book.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListDetailLongBookOrgan implements OnInit {
  @Input() size = 1;
  counter = Array;

  constructor() { }

  ngOnInit(): void {
  }

}
