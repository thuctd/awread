import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'awread-market',
  templateUrl: './market.layout.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketLayout implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
