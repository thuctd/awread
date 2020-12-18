import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'detail-index',
  templateUrl: './detail-index.template.html',
  styleUrls: ['./detail-index.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailIndexTemplate implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
