import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'atom-select-multiple',
  templateUrl: './select-multiple.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
      ::ng-deep .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value {
        background-color: #5ABD8C !important;
      }
      ::ng-deep .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected {
        color: #5ABD8C;
      }
      ::ng-deep .ng-select.ng-select-focused .ng-select-container .ng-value-container .ng-placeholder {
        color: #5ABD8C;
      }
      ::ng-deep .ng-select.ng-select-focused .ng-select-container:after {
        border-color: #5ABD8C;
        border-width: 1px;
      }
      ::ng-deep .ng-select.ng-select-focused .ng-select-container .ng-arrow-wrapper .ng-arrow {
        color: #5ABD8C;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectMultipleAtom implements OnInit {
  @Input() array = [];
  @Input() selectMultiple = {
    title: '',
    placeholder: '',
    formControlName: '',
    id: '',
    name: ''
  }

  @Input() profileForm: FormGroup = this.fb.group({
    age: [''],
    genreIds: [[]],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
