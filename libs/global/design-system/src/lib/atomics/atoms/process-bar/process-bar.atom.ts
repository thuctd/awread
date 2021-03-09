import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-process-bar',
  templateUrl: './process-bar.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProcessBarAtom implements OnInit {
  @Input() percentLoading = '50%'
  constructor() { }

  ngOnInit(): void {
  }

}
