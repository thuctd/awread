import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'list-detail-prose',
  templateUrl: './list-detail-prose.organ.html',
  styleUrls: ['./list-detail-prose.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListDetailProseOrgan implements OnInit {
  @Input() size = 5;
  counter = Array;

  constructor() { }

  ngOnInit(): void {
  }

}
