import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  Input,
} from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.organ.html',
  styleUrls: ['./login.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginOrgan implements OnInit {
  @Input() authForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  @Output() auth = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
