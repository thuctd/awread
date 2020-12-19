import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'detail-action-btns',
  templateUrl: './detail-action-btns.molec.html',
  styleUrls: ['./detail-action-btns.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailActionBtnsMolec implements OnInit {
  @Input() btns = [
    {
      submitText: 'Draft',
      isActive: false,
    },{
    submitText: 'Publish',
    isActive: true,
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
