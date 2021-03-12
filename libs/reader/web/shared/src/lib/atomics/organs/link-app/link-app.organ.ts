import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'organ-link-app',
  templateUrl: './link-app.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkAppOrgan implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
