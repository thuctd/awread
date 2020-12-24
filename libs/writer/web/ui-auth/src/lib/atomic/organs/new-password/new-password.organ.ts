import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'new-password',
  templateUrl: './new-password.organ.html',
  styleUrls: ['./new-password.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewPasswordOrgan implements OnInit {
  form = this.fb.group({
    password: ['', [Validators.required]],
    confirmpassword: ['', [Validators.required]],
  });
  @Output() submitEvent = new EventEmitter();
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {}
}
