import { FormGroup } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { TabHead } from '../../../interface/tabs';

@Component({
  selector: 'template-login-register',
  templateUrl: './login-register.template.html',
  styleUrls: ['./login-register.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginRegisterTemplate implements OnInit {
  @Input() authForm: FormGroup;
  @Input() tabs: TabHead[];
  @Input() selectedTab: string;
  @Output() regiterEvent = new EventEmitter();
  @Output() auth = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log('mode: ', this.selectedTab);
  }

  toggleTab(event) {
    this.authForm.reset();
    if (this.selectedTab === 'login') {
      this.selectedTab = 'register';
    } else {
      this.selectedTab = 'login';
    }
  }
}
