import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'organ-wrt-rule-popup',
  templateUrl: './wrt-rule-popup.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrtRulePopupOrgan implements OnInit {
  @Input() rules;
  @Input() form: FormGroup = this.fb.group({
    terms: ['', [Validators.required]],
  });
  @Output() eventSubmit = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
