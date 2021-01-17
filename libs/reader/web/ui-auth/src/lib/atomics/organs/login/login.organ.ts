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
  selector: 'organ-login',
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
