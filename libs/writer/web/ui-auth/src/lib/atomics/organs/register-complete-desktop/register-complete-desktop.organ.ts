import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faCheck, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'organ-register-complete-desktop',
  templateUrl: './register-complete-desktop.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class RegisterCompleteDesktopOrgan implements OnInit {
  @Input() isLinear = false;
  icons = { faCheck, faExclamationCircle };
  @Input() genres = [];
  @Input() thirdForm = this.fb.group({
    age: ['2'],
    genreIds: [[]],
  });

  @Input() secondForm = this.fb.group({
    name: ['', Validators.required],
    firstname: [''],
    middlename: [''],
    lastname: [''],
  });

  @Input() firstForm = this.fb.group(
    {
      username: ['', [Validators.required]],
      email: ['', []],
      phone: ['', []],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(4)]],
    },
    { validator: this.passwordMatchValidator }
  );

  @Input() experienceForm = this.fb.group({
    age: ['2'],
    genreIds: [[]],
  });

  @Input() optionalForm = this.fb.group({
    firstname: [''],
    middlename: [''],
    lastname: [''],
    facebook: [''],
    google: [''],
    apple: [''],
  });

  @Input() requireForm = this.fb.group(
    {
      username: ['', [Validators.required]],
      name: [''],
      email: ['', []],
      phone: ['', []],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(4)]],
    },
    { validator: this.passwordMatchValidator }
  );

  constructor(private fb: FormBuilder) {}

  passwordMatchValidator(g) {
    return g.get('password').value === g.get('confirmpassword').value ? null : { missmatch: true };
  }

  ngOnInit(): void {}
}
