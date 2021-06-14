import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { faCheck, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'organ-register-complete-mobile',
  templateUrl: './register-complete-mobile.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
      ::ng-deep mat-vertical-stepper .mat-step-header .mat-step-icon-selected, 
      ::ng-deep mat-vertical-stepper .mat-step-header .mat-step-icon-state-done, 
      ::ng-deep mat-vertical-stepper .mat-step-header .mat-step-icon-state-edit{
        background-color: rgba(90, 189, 140, 1);
      }
      .ng-select.custom ::ng-deep ng-dropdown-panel  {            
        background-color:white;
        padding: 0.5rem 1rem;
        box-shadow: 0px 0px 4px rgba(0,0,0,0.15);
        width: 65vw;
        right: 0;
    }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterCompleteMobileOrgan implements OnInit {
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

  constructor(private fb: FormBuilder) {}

  passwordMatchValidator(g) {
    return g.get('password').value === g.get('confirmpassword').value ? null : { missmatch: true };
  }

  ngOnInit(): void {}
}
