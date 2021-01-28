import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'atom-btn-select',
  templateUrl: './btn-select.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BtnSelectAtom implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
