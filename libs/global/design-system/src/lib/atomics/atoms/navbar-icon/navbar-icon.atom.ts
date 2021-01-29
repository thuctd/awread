import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'navbar-icon',
  templateUrl: './navbar-icon.atom.html',
  styleUrls: ['./navbar-icon.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarIconAtom implements OnInit {
  @Input() active = 'active';
  @Input() linkName = 'dashboard';
  @Input() linkTo = 'dashboard';
  @Input() iconUrl = '/global-assets/images/Dashboard.png';
  @Input() iconUrl2 = '/global-assets/images/Group 1.png';

  constructor() {}

  ngOnInit(): void {}
}
