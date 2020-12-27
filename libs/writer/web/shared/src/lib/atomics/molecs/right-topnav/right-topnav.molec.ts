import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'right-topnav',
  templateUrl: './right-topnav.molec.html',
  styleUrls: ['./right-topnav.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RightTopnavMolec implements OnInit {
  avatarUrl = 'http://tachyons.io/img/logo.jpg';
  name = 'Hà Thanh Tùng';
  @Output() searchEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  signoutEvent(data?) {
    console.log('some one is signout, routing to home page', data);
  }
}
