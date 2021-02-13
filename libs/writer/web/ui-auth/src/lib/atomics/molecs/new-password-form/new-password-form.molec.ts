import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'new-password-form',
  templateUrl: './new-password-form.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewPasswordFormMolec implements OnInit {
  @Input() type = 'password';
  icons = { faLock };
  @Input() form = this.fb.group({
    password: ['', [Validators.required]],
    confirmpassword: ['', [Validators.required]],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
