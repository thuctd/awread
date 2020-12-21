import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.template.html',
  styleUrls: ['./profile.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileTemplate implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
