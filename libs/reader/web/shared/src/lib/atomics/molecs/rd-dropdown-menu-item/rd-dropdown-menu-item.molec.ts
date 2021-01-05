import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-rd-dropdown-menu-item',
  templateUrl: './rd-dropdown-menu-item.molec.html',
  styleUrls: ['./rd-dropdown-menu-item.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RdDropdownMenuItemMolec implements OnInit {
  @Input() data;
  @Input() menu = [];
  constructor() { }
  ngOnInit(): void {
  }

}
