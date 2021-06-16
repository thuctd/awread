import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
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
  icons = { faCheck, faExclamationCircle };
  @Input() genres = [];
  @Input() experienceForm;
  @Input() optionalForm;
  @Input() requireForm;
  @Output() linkSocialEvent = new EventEmitter();
  @Output() completeEvent = new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }
}
