import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'list-head',
  templateUrl: './list-head.molec.html',
  styleUrls: ['./list-head.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListHeadMolec implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
