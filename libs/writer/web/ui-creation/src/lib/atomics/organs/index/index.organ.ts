import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'index',
  templateUrl: './index.organ.html',
  styleUrls: ['./index.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexOrgan implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
