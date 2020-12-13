import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'action-btns',
  templateUrl: './action-btns.molec.html',
  styleUrls: ['./action-btns.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionBtnsMolec implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
