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
        width: 760px;
        max-width: 80vw;
        overflow:hidden !important;
        position:relative;
        border-radius: 0.375rem;
      }
      .stepper-process-bar{
        position:absolute;
        top:0;
        height:50px;
        left:-20px;
        transition:0.3s ease-in;
        background: rgba(90, 189, 140, 1);
        transform: skew(-30deg);
      }
      ::ng-deep mat-horizontal-stepper .mat-horizontal-stepper-header-container{background: rgba(90, 189, 140, 0.4);}
      ::ng-deep mat-horizontal-stepper .mat-stepper-horizontal-line{display: none !important}
      ::ng-deep mat-horizontal-stepper .mat-step-icon{font-size:12px; color: rgba(90, 189, 140, 1); background: white;}
      ::ng-deep mat-horizontal-stepper .mat-step-icon.mat-step-icon-selected{font-size:12; color: rgba(90, 189, 140, 1); background: white;}
      ::ng-deep mat-horizontal-stepper .mat-step-label .mat-step-sub-label-error{font-size:11px; line-height:1.2em;white-space: normal;}
      ::ng-deep mat-horizontal-stepper .mat-step-header[ng-reflect-state='edit'] > div:not(.mat-step-icon-state-edit),
      ::ng-deep mat-horizontal-stepper .mat-step-label.mat-step-label-selected>div {color: white !important}
      ::ng-deep mat-horizontal-stepper .mat-step-header .mat-step-icon-selected, 
      ::ng-deep mat-horizontal-stepper .mat-step-header .mat-step-icon-state-done, 
      ::ng-deep mat-horizontal-stepper .mat-step-header .mat-step-icon-state-edit{
        background-color:white !important;
        border:1px solid  rgba(90, 189, 140, 1);
      }
      ::ng-deep mat-horizontal-stepper .mat-step-header .mat-step-icon-selected fa-icon, 
      ::ng-deep mat-horizontal-stepper .mat-step-header .mat-step-icon-state-done fa-icon, 
      ::ng-deep mat-horizontal-stepper .mat-step-header .mat-step-icon-state-edit fa-icon{
                color: rgba(90, 189, 140, 1) !important;
      }
      ::ng-deep mat-horizontal-stepper .mat-step-header{overflow: visible !important; width:25%; max-width:25%;font-family: 'nunito'}
      ::ng-deep mat-horizontal-stepper .mat-step-header:not(:last-child):after{
        position: absolute;
        top:0;
        bottom:0;
        right:0;
        background: white;
        content:'';
        width:1px;
        transform: skewX(-30deg);
      }
      ::ng-deep mat-horizontal-stepper .mat-step-header.cdk-program-focused, 
      ::ng-deep mat-horizontal-stepper .mat-step-header:hover{background:transparent !important;}
      ::ng-deep mat-horizontal-stepper .mat-horizontal-content-container{min-height:420px; padding: 50px 100px;}
      ::ng-deep mat-horizontal-stepper .mat-horizontal-stepper-header{height:50px !important;}
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
  widthProcess = 0;
  expandedWidth = 20;
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

  constructor(private fb: FormBuilder) {}
  passwordMatchValidator(g) {
    return g.get('password').value === g.get('confirmpassword').value ? null : { missmatch: true };
  }

  selectionChange(event){
    this.widthProcess = 25 * (event.selectedIndex + 1);
    if(event.selectedIndex == 3){
      this.expandedWidth = 40;
    }else{
      this.expandedWidth = 20;
    }
  }

  ngOnInit(): void {
    this.widthProcess = 25;
  }
}
