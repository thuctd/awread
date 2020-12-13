import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'profile-form',
  templateUrl: './profile-form.molec.html',
  styleUrls: ['./profile-form.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileFormMolec implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
