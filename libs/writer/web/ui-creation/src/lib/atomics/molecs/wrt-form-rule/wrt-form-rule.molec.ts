import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'molec-wrt-form-rule',
  templateUrl: './wrt-form-rule.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrtFormRuleMolec implements OnInit {
  @Input() form: FormGroup = this.fb.group({
    terms: ['', [Validators.required]],
  });
  @Input() title = 'Tôi đồng ý với các điều khoản bên trên';
  @Input() rules = '';
  @Output() eventSubmit = new EventEmitter();
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<WrtFormRuleMolec>) { }

  ngOnInit(): void {
  }
}
