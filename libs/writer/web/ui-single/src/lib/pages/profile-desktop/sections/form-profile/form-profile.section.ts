import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'awread-form-profile',
  templateUrl: './form-profile.section.html',
  styleUrls: ['./form-profile.section.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormProfileSection implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
