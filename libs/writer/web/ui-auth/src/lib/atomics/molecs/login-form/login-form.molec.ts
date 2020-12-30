import { FormGroup } from '@angular/forms';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'login-form',
  templateUrl: './login-form.molec.html',
  styleUrls: ['./login-form.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormMolec implements OnInit {
  @Input() type = 'password';
  icons = { faLock, faEnvelope };
  @Input() form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
