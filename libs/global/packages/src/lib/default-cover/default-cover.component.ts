import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'awread-default-cover',
  templateUrl: './default-cover.component.html',
  styleUrls: ['./default-cover.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultCoverComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
