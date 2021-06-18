import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'template-register-complete-background',
  templateUrl: './register-complete-background.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  // styleUrls: ['./register-complete-background.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterCompleteBackgroundTemplate implements OnInit {
  @Input() isMobile: boolean;
  constructor() { }

  ngOnInit(): void { }
}
