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
        transition:0.5s ease-in;
        background: rgba(90, 189, 140, 1);
        transform: skew(-30deg);
      }
      ::ng-deep mat-horizontal-stepper .mat-stepper-horizontal-line{display: none !important}
      ::ng-deep mat-horizontal-stepper .mat-step-icon{font-size:12px; color: rgba(90, 189, 140, 1); background: white;}
      ::ng-deep mat-horizontal-stepper .mat-step-icon.mat-step-icon-selected{font-size:12; color: rgba(90, 189, 140, 1); background: white;}
      ::ng-deep mat-horizontal-stepper .mat-step-label .mat-step-text-label{font-family: 'nunito'}
      ::ng-deep mat-horizontal-stepper .mat-step-label.mat-step-label-selected .mat-step-text-label{color: white}
      ::ng-deep mat-horizontal-stepper .mat-step-header{overflow: visible !important; width:25%; max-width:25%, border-bottom:1px solid #e4e4e4;}
      ::ng-deep mat-horizontal-stepper .mat-step-header.cdk-program-focused, 
      ::ng-deep mat-horizontal-stepper .mat-step-header:hover{background:transparent !important;}
      ::ng-deep mat-horizontal-stepper .mat-horizontal-content-container{min-height:350px; padding: 50px;}
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
  expandedWidth = 12;
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

  selectionChange(event){
    this.widthProcess = 25 * (event.selectedIndex + 1);
    if(event.selectedIndex == 3){
      this.expandedWidth = 40;
    }else{
      this.expandedWidth = 12;
    }
  }

  ngOnInit(): void {
    this.widthProcess = 25;
  }
}
