import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'register',
  templateUrl: './register.organ.html',
  styleUrls: ['./register.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterOrgan implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
