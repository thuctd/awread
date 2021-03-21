import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'template-navbar-reader',
  templateUrl: './navbar-reader.template.html',
  styles: [
    `
      :host {
        display: block;
      }

      .z-999 {
        z-index: 999;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarReaderTemplate implements OnInit {
  @Input() isLogin = false;
  constructor() { }

  ngOnInit(): void {
  }

}
