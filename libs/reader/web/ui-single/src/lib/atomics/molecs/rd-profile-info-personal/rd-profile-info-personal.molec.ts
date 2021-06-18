import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'molec-rd-profile-info-personal',
  templateUrl: './rd-profile-info-personal.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdProfileInfoPersonalMolec implements OnInit {
  @Input() currentUser;
  @Output() clicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }
}
