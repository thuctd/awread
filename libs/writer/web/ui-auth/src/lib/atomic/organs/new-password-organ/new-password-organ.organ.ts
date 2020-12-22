import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'new-password-organ',
  templateUrl: './new-password-organ.organ.html',
  styleUrls: ['./new-password-organ.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewPasswordOrganOrgan implements OnInit {
  form = this.fb.group({
    password: ['', [Validators.required]],
    confirmpassword: ['', [Validators.required]]
  });
  @Output() submitEvent = new EventEmitter();
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
  }

}
