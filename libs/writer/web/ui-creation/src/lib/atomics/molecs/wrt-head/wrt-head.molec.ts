import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'wrt-head',
  templateUrl: './wrt-head.molec.html',
  styleUrls: ['./wrt-head.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrtHeadMolec implements OnInit {
  @Input() formActiveStatus = false;
  @Input() btns = [{
    submitText: 'Publish',
    isActive: true,
  }, {
    submitText: 'Draft',
    isActive: false,
  }, {
    submitText: 'Priview',
    isActive: false,
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
