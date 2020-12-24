import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'left-nav',
  templateUrl: './left-nav.organ.html',
  styleUrls: ['./left-nav.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftNavOrgan implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
