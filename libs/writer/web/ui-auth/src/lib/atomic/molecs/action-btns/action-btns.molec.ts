import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'action-btns',
  templateUrl: './action-btns.molec.html',
  styleUrls: ['./action-btns.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionBtnsMolec implements OnInit {
  @Input() formActiveStatus = false;
  constructor() { }

  ngOnInit(): void {
  }

}
