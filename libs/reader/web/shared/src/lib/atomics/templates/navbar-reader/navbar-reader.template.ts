import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

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
  @Input() control = new FormControl();
  @Output() eventSearch = new EventEmitter();
  @Input() isLogin = false;
  constructor() { }

  ngOnInit(): void {
  }

}
