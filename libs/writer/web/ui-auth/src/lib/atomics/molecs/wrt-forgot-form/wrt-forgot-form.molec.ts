import { FormControl } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'wrt-forgot-form',
  templateUrl: './wrt-forgot-form.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtForgotFormMolec implements OnInit {
  icons = { faEnvelope };
  @Input() emailFormControl: FormControl = new FormControl('');
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
