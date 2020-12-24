import { FormGroup } from '@angular/forms';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faLock, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'register-form',
  templateUrl: './register-form.molec.html',
  styleUrls: ['./register-form.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormMolec implements OnInit {
  icons = { faLock, faEnvelope, faUser };
  @Input() form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
