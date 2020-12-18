import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'detail',
  templateUrl: './detail.organ.html',
  styleUrls: ['./detail.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailOrgan implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
