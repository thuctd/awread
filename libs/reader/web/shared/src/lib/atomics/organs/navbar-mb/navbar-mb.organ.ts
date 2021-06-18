import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'organ-navbar-mb',
  templateUrl: './navbar-mb.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarMbOrgan implements OnInit {
  @Input() user = {};
  @Input() isMenuNoti = false;

  @Input() search = faSearch;
  @Input() isLogin = true;
  @Output() clickDisplay = new EventEmitter();
  @Output() logoutEvent = new EventEmitter();
  @Output() clickOutside = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }
}
