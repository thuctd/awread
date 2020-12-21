import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'register',
  templateUrl: './register.organ.html',
  styleUrls: ['./register.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterOrgan implements OnInit {
  @Output() submitEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
