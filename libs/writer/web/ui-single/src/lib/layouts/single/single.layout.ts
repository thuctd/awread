import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'awread-single',
  templateUrl: './single.layout.html',
  styleUrls: ['./single.layout.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleLayout implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
