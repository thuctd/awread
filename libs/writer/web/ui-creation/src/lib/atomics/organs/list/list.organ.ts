import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.organ.html',
  styleUrls: ['./list.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListOrgan implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
