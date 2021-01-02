import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-base-link',
  templateUrl: './base-link.atom.html',
  styleUrls: ['./base-link.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseLinkAtom implements OnInit {
  @Input() linkTitle = "Xêm thêm...";
  @Input() isSize = true;

  constructor() { }

  ngOnInit(): void {
  }

}
