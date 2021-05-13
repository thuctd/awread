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
  @Output() btnClicked = new EventEmitter();
  @Output() socialFBBtnClicked = new EventEmitter();
  @Output() socialGGBtnClicked = new EventEmitter();
  @Input() active = false;
  constructor() { }

  ngOnInit(): void { }
}
