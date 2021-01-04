import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'list-detail-prose',
  templateUrl: './list-detail-prose.organ.html',
  styleUrls: ['./list-detail-prose.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListDetailProseOrgan implements OnInit {

  counter = Array;

  constructor() { }

  ngOnInit(): void {
  }

}
