import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'template-navbar-reader',
  templateUrl: './navbar-reader.template.html',
  styles: [
    `
      :host {
        display: block;
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
