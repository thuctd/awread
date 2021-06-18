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
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectMultipleAtom implements OnInit {
  @Input() array = [];
  @Input() selectMultiple = {
    title: '',
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
