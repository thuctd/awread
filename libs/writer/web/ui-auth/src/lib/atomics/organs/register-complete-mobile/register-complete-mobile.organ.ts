import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { faCheck, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'organ-register-complete-mobile',
  templateUrl: './register-complete-mobile.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterCompleteMobileOrgan implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
