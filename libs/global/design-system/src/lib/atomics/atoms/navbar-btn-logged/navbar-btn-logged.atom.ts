import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'atom-navbar-btn-logged',
  templateUrl: './navbar-btn-logged.atom.html',
  styleUrls: ['./navbar-btn-logged.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarBtnLoggedAtom implements OnInit {
  @Input() userName = 'BlackCu';
  @Output() submitEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
