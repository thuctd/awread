import { FormGroup } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'form-profie',
  templateUrl: './form-profie.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormProfieOrgan implements OnInit {
  @Input() link = '/forgot';
  @Input() submitText = 'Lưu';
  @Input() profileForm: FormGroup;
  @Input() submitted: boolean;
  @Output() updateProfileEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void { }
}
