import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'list-stories',
  templateUrl: './list-stories.molec.html',
  styleUrls: ['./list-stories.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListStoriesMolec implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
