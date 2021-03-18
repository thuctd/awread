import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'template-rd-author-popup-list-followers-mb',
  templateUrl: './rd-author-popup-list-followers-mb.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdAuthorPopupListFollowersMbTemplate implements OnInit {
  @Input() faIcon = faChevronLeft;

  constructor() {}

  ngOnInit(): void {}
}
