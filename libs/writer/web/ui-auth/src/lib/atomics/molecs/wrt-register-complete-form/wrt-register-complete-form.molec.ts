import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faLock, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'molec-wrt-register-complete-form',
  templateUrl: './wrt-register-complete-form.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrtRegisterCompleteFormMolec implements OnInit {
  icons = { faLock, faEnvelope, faUser };

  @Input() form: FormGroup = this.fb.group({
    lastname: ['', []],
    middlename: ['', []],
    firstname: ['', []],
  });
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

}
