import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'wrt-new-password-form',
  templateUrl: './wrt-new-password-form.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtNewPasswordFormMolec implements OnInit {
  @Input() type = 'password';
  icons = { faLock };
  @Input() form = this.fb.group({
    password: ['', [Validators.required]],
    confirmpassword: ['', [Validators.required]],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
