import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'writing',
  templateUrl: './writing.organ.html',
  styleUrls: ['./writing.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WritingOrgan implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
