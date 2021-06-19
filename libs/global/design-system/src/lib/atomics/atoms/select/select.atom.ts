import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'atom-select',
  templateUrl: './select.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectAtom implements OnInit {
  @Input() inputControl = new FormControl('');
  @Input() options = [];
  @Input() titleSellect = 'Thể loại';
  @Input() widthClass = 'w-72';

  constructor() { }

  ngOnInit(): void { }
}
