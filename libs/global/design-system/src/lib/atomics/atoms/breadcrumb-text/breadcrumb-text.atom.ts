import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-breadcrumb-text',
  templateUrl: './breadcrumb-text.atom.html',
  styleUrls: ['./breadcrumb-text.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbTextAtom implements OnInit {
  @Input() title = 'Home';
  @Input() hasArrow = false;
  constructor() { }

  ngOnInit(): void {
  }

}
