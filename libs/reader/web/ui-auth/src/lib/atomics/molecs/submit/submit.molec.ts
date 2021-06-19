import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'molec-submit',
  templateUrl: './submit.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubmitMolec implements OnInit {
  @Input() noSocial = false;
  @Input() text = 'Đăng nhập';
  @Input() startText = 'Đăng nhập với ';
  @Output() btnClicked = new EventEmitter();
  @Input() active = false;
  constructor() { }

  ngOnInit(): void { }
}
