import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'template-login-mobile',
  templateUrl: './login-mobile.template.html',
  styleUrls: ['./login-mobile.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginMobileTemplate implements OnInit {
  @Input() authForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  @Output() auth = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
