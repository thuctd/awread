import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'atom-breadcrumb',
  templateUrl: './breadcrumb.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
//FIX: Lặp vô hạn(Deatil&&Read)
export class BreadcrumbAtom implements OnInit {
  @Input() icon = faHome;
  @Input() items = [];

  constructor() { }

  ngOnInit(): void { }
}
