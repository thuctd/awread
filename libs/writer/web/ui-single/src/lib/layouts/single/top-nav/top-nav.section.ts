import { Component, OnInit, ChangeDetectionStrategy,  Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'awread-top-nav',
  templateUrl: './top-nav.section.html',
  styleUrls: ['./top-nav.section.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopNavSection implements OnInit {
  @Input() lefNavOpened: boolean;
  @Input() user: any;
  @Output() toggleSide = new EventEmitter();
  @Output() signout = new EventEmitter();
  isMenuOpen = false;

  constructor() {}

  toggleMenu($event) {
    $event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }

  onClick() {
    this.isMenuOpen = false;
  }

  ngOnInit(): void {
  }

}
