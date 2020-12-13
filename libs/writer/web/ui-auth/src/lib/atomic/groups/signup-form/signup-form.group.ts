import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.group.html',
  styleUrls: ['./signup-form.group.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupFormGroup implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
