import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'template-read-mobile',
  templateUrl: './read-mobile.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReadMobileTemplate implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
