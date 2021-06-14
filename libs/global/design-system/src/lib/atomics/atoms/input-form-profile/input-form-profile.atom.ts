import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'input-form-profile',
  templateUrl: './input-form-profile.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputFormProfileAtom implements OnInit {
  @Input() profileForm: FormGroup = this.fb.group({});
  @Input() item = {
    title: '',
    formControlName: '',
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
