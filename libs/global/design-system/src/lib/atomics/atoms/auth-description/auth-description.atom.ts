import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'auth-description',
  templateUrl: './auth-description.atom.html',
  styleUrls: ['./auth-description.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthDescriptionAtom implements OnInit {
  @Input() description = 'Đây là phần mô tả của phần đăng nhập!!!';
  constructor() { }

  ngOnInit(): void {
  }

}
