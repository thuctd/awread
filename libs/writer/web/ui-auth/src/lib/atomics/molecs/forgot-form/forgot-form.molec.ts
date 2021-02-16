import { FormControl } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'forgot-form',
  templateUrl: './forgot-form.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotFormMolec implements OnInit {
  icons = { faEnvelope };
  @Input() emailFormControl: FormControl = new FormControl('');
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
