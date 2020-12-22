import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'template-login-register',
  templateUrl: './login-register.template.html',
  styleUrls: ['./login-register.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginRegisterTemplate implements OnInit {
  tabs = [{ name: 'Đăng nhập', isActive: true }, { name: 'Đăng ký' }];
  @Output() submitEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void { }
}
