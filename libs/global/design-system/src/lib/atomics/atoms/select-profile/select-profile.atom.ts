import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-select-profile',
  templateUrl: './select-profile.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectProfileAtom implements OnInit {
  @Input() profileForm: FormGroup = this.fb.group({});
  @Input() item = {
    title: '',
    formControlName: '',
    class: '',
    options: [
      {
        value: '0',
        text: '',
      },
      {
        value: '1',
        text: '',
      },
      {
        value: '2',
        text: '',
      },
    ],
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
