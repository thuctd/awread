import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-dropdown-link',
  templateUrl: './dropdown-link.atom.html',
  styleUrls: ['./dropdown-link.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownLinkAtom implements OnInit {
  @Input() title = 'title';
  @Input() href = '';
  constructor() { }

  ngOnInit(): void { }
}
