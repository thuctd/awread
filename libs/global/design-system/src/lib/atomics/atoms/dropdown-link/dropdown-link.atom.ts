import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'atom-dropdown-link',
  templateUrl: './dropdown-link.atom.html',
  styleUrls: ['./dropdown-link.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownLinkAtom implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
