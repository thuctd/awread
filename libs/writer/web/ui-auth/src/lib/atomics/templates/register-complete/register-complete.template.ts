import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'template-register-complete',
  templateUrl: './register-complete.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterCompleteTemplate implements OnInit {
  @Input() isMobile = false;
  @Input() genres = [];
  constructor() {}

  ngOnInit(): void {}
}
