import { FormControl } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'molec-forgot-form',
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
  @Output() enter = new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }
}
