import { FormGroup } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'register',
  templateUrl: './register.organ.html',
  styleUrls: ['./register.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterOrgan implements OnInit {
  @Output() regiterEvent = new EventEmitter();
  @Input() authForm: FormGroup;
  constructor() { }

  ngOnInit(): void { }
}
