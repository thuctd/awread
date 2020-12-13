import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'action-btns',
  templateUrl: './action-btns.group.html',
  styleUrls: ['./action-btns.group.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionBtnsGroup implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
