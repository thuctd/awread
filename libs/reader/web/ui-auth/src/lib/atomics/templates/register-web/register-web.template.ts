import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'template-register-web',
  templateUrl: './register-web.template.html',
  styleUrls: ['./register-web.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterWebTemplate implements OnInit {
  @Input() link = '/global-assets/images/newlogo.png';

  @Input() authForm = this.fb.group({
    displayName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });
  @Output() auth = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
