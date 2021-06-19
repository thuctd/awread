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
      ::ng-deep .select-multiple .ng-value-container {
        color: #34d399;
        .ng-placeholder {
          color: #34d399;
        }
      }
      ::ng-deep .select-multiple .ng-select .ng-select-container {
        /* height: 40px; */
        padding: 0.25rem;
        border-top: none;
        border-left: none;
        border-right: none;
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
