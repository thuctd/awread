import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'awread-signin-desktop',
  templateUrl: './signin-desktop.section.html',
  styleUrls: ['./signin-desktop.section.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SigninDesktopSection implements OnInit {
  @Input() template;
  @Input() mode;
  @Input() hasValueUs;
  @Input() hasValuePw;
  @Input() activeTemplate;
  @Input() hasValueName: boolean;
  @Input() hasValueCfpw: boolean;

  @Input() form;
  @Output() swapMode: EventEmitter<any> = new EventEmitter();
  @Output() auth: EventEmitter<any> = new EventEmitter();
 
  constructor() { }

  ngOnInit(): void {
  }
  
}
