import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'template-detail',
  templateUrl: './detail-index.template.html',
  styleUrls: ['./detail-index.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailIndexTemplate implements OnInit {
  tabs = [
    { name: 'Tables of Contents', isActive: true },
    { name: 'Story Details'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
