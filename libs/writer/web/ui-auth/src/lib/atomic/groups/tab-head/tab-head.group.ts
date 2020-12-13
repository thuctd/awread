import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tab-head',
  templateUrl: './tab-head.group.html',
  styleUrls: ['./tab-head.group.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabHeadGroup implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
