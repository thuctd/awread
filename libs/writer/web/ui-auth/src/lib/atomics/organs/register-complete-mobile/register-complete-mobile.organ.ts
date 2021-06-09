import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
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
  @Input() isLinear = false;
  @Input() firstFormGroup = this.fb.group({
    firstCtrl: ['', Validators.required],
  });
  @Input() secondFormGroup = this.fb.group({
    secondCtrl: ['', Validators.required],
  });
  icons = { faCheck };
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
