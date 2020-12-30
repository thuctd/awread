import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'detail-cmb-form',
  templateUrl: './detail-cmb-form.atom.html',
  styleUrls: ['./detail-cmb-form.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailCmbFormAtom implements OnInit {
  @Input() titleLabel = 'Awread';
  @Input() inputControl = new FormControl('');
  @Input() orders = [];

  constructor() {
    this.orders = this.getOrders();
  }

  ngOnInit(): void {
  }

  getOrders() {
    return [
      { id: '1', name: 'order 1' },
      { id: '2', name: 'order 2' },
      { id: '3', name: 'order 3' },
      { id: '4', name: 'order 4' }
    ];
  }

}
