import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'molec-submit',
  templateUrl: './submit.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .blue {
        background-color: #3b5998;
        border-color: #3b5998;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubmitMolec implements OnInit {
  @Input() name = 'Đăng nhập bằng Facebook';
  @Input() text = 'Đăng nhập';
  @Output() btnClicked = new EventEmitter();
  @Input() active = false;
  constructor() {}

  ngOnInit(): void {}
}
