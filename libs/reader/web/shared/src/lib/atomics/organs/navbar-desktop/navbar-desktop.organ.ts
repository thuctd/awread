import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'organ-navbar-desktop',
  templateUrl: './navbar-desktop.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarDesktopOrgan implements OnInit {
  @Input() items = [
    {
      id: '1',
      title: 'Tôi lạc quan'
    }
  ];
  @Input() searchControl = new FormControl();
  @Output() eventSearch = new EventEmitter();
  @Input() isLogin = false;
  constructor() { }

  ngOnInit(): void {
  }

}
