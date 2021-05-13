import { FormGroup } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'wrt-login-form',
  templateUrl: './wrt-login-form.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtLoginFormMolec implements OnInit {
  @Input() type = 'password';
  icons = { faLock, faEnvelope };
  @Input() form: FormGroup = this.fb.group({
    loginname: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  @Output() auth = new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }

}
