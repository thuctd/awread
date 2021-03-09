import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'detail-cmb-form',
  templateUrl: './detail-cmb-form.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailCmbFormAtom implements OnInit {
  @Input() titleLabel = 'Awread';
  @Input() inputControl = new FormControl('none');
  @Input() orders = [];

  constructor() {
    this.orders = this.getOrders();
  }

  ngOnInit(): void {}

  getOrders() {
    return [
      { id: 'none', name: 'None' },
      { id: '13', name: '13+' },
      { id: '18', name: '18+' },
    ];
  }
}
