import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faCheck, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'template-register-complete',
  templateUrl: './register-complete.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterCompleteTemplate implements OnInit {
  @Input() isMobile = false;
  @Input() isLinear = false;
  icons = { faCheck, faExclamationCircle };
  @Input() genres = [];
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
      name: ['', [Validators.required]],
      email: ['', []],
      phone: ['', []],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(4)]],
    },
    { validator: this.passwordMatchValidator }
  );

  @Input() social = new EventEmitter();
  @Input() complete = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  passwordMatchValidator(g) {
    return g.get('password').value === g.get('confirmpassword').value ? null : { missmatch: true };
  }

  ngOnInit() {}
}
