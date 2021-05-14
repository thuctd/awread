import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'atom-advertis',
  templateUrl: './advertis.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvertisAtom implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
