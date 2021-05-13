import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './wrt-login.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtLoginOrgan implements OnInit {
  @Input() forgotLink = '/forgot';
  @Input() authForm = this.fb.group({
    loginname: ['', Validators.required],
    password: ['', Validators.required],
  });
  @Output() auth = new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }
}
